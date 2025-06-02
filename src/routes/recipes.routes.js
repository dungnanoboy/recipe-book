const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const Category = require('../models/Category');
const User = require('../models/User');

router.get('/recipes', async (req, res) => {
  try {
    const categoryId = req.query.category;
    let recipeQuery = {};
    
    if (categoryId) {
      recipeQuery.category_Id = parseInt(categoryId);
    }

    const [categories, recipes, topUsers] = await Promise.all([
      Category.find(), // Lấy tất cả categories
      Recipe.find(recipeQuery).sort({ createdAt: -1 }), // Lấy recipes theo filter
      User.aggregate([ // Lấy top users có nhiều công thức
        {
          $lookup: {
            from: 'recipes',
            localField: '_id',
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

    res.render('recipes', { categories, recipes, topUsers });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;