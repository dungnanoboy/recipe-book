const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const Category = require('../models/Category');
const User = require('../models/User');
const Ingredient = require('../models/Ingredient'); // Import Ingredient model

router.get('/recipes', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 6;
    const skip = (page - 1) * limit;
    
    // Lấy category từ query params
    const categoryId = req.query.category;
    let recipeQuery = {};
    
    if (categoryId) {
      // Đảm bảo categoryId là số
      recipeQuery.category_Id = parseInt(categoryId);
      console.log('Filtering by category:', categoryId); // Debug log
    }

    // Thực hiện queries
    const [categories, recipes, totalRecipes, topUsers] = await Promise.all([
      Category.find().sort({ id: 1 }), // Sắp xếp categories theo id
      Recipe.find(recipeQuery)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Recipe.countDocuments(recipeQuery),
      User.aggregate([
        {
          $lookup: {
            from: 'recipes',
            localField: 'id',
            foreignField: 'userId',
            as: 'recipes'
          }
        },
        {
          $project: {
            username: 1,
            avatarUrl: 1,
            recipeCount: { $size: '$recipes' }
          }
        },
        { $sort: { recipeCount: -1 } },
        { $limit: 5 }
      ])
    ]);

    // Debug logs
    //console.log('Query:', recipeQuery);
    //console.log('Total recipes:', totalRecipes);
    //console.log('Recipes found:', recipes.length);

    const totalPages = Math.ceil(totalRecipes / limit);

    res.render('recipes', {
      recipes,
      categories,
      currentPage: page,
      totalPages,
      totalRecipes,
      categoryId: categoryId || '', // Truyền categoryId về template
      topUsers
    });

  } catch (error) {
    console.error('Error in recipes route:', error);
    res.status(500).send('Server Error');
  }
});

// Thêm route cho recipe detail
router.get('/recipe/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send('Không tìm thấy công thức');
    }

    // Tăng số lượt xem
    recipe.views += 1;
    await recipe.save();

    // Lấy chi tiết nguyên liệu
    const ingredientDetails = await Promise.all(
      recipe.ingredients.map(async (ing) => {
        const ingredient = await Ingredient.findOne({ _id: ing.ingredient_id });
        return {
          ...ing.toObject(),
          name: ingredient ? ingredient.name : 'Unknown',
          unit: ingredient ? ingredient.unit : ''
        };
      })
    );

    // Lấy thông tin category và user
    const [category, user] = await Promise.all([
      Category.findOne({ id: recipe.category_Id }),
      User.findOne({ id: recipe.userId })
    ]);

    res.render('receipe-post', {
      recipe: {
        ...recipe.toObject(),
        ingredients: ingredientDetails,
        categoryName: category ? category.name : 'Uncategorized',
        authorName: user ? user.username : 'Unknown User',
        createdAt: recipe.createdAt
      }
    });

  } catch (error) {
    console.error('Error in recipe detail:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;