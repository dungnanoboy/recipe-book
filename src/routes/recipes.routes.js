const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const Category = require('../models/Category');
const User = require('../models/User');

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
    console.log('Query:', recipeQuery);
    console.log('Total recipes:', totalRecipes);
    console.log('Recipes found:', recipes.length);

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

module.exports = router;