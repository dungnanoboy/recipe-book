const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Ingredient = require('../models/Ingredient');
const Recipe = require('../models/Recipe');
const User = require('../models/User');

// Middleware kiểm tra quyền admin
const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === 'admin') {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

// Route hiển thị bảng categories
router.get('/category-table', isAdmin, async (req, res) => {
  try {
    const categories = await Category.find().sort({ id: 1 });
    res.render('admin/category-table', { 
      categories,
      title: 'Quản lý danh mục công thức'
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Server Error');
  }
});

// Route hiển thị bảng ingredients 
router.get('/ingredient-table', isAdmin, async (req, res) => {
  try {
    const ingredients = await Ingredient.find().sort({ _id: 1 });
    res.render('admin/ingredient-table', {
      ingredients,
      title: 'Quản lý nguyên liệu'
    });
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    res.status(500).send('Server Error');
  }
});

// Route hiển thị bảng recipes
router.get('/recipe-table', isAdmin, async (req, res) => {
  try {
    // Lấy recipes với populate để có thông tin chi tiết
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    
    // Lấy categories để map tên category
    const categories = await Category.find();
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.id] = cat.name;
    });

    res.render('admin/recipe-table', {
      recipes,
      categoryMap,
      title: 'Quản lý công thức'
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Server Error');
  }
});

// Route hiển thị bảng users
router.get('/user-table', isAdmin, async (req, res) => {
  try {
    const users = await User.find().sort({ id: 1 });
    res.render('admin/user-table', {
      users,
      title: 'Quản lý người dùng'
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;