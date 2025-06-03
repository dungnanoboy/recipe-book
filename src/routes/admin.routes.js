const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const recipeController = require('../controllers/recipeController');
const ingredientController = require('../controllers/ingredientController');
const userController = require('../controllers/userController');

// Middleware kiểm tra quyền admin
const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === 'admin') {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

// Category routes
router.get('/category-table', isAdmin, categoryController.getAllCategories);
router.get('/category/:id', isAdmin, categoryController.getCategoryById);
router.post('/category/add', isAdmin, categoryController.addCategory);
router.post('/category/edit', isAdmin, categoryController.editCategory);
router.delete('/category/delete/:id', isAdmin, categoryController.deleteCategory);

// Recipe routes
router.get('/recipe-table', isAdmin, recipeController.getAllRecipes);
router.get('/recipe/:id', isAdmin, recipeController.getRecipeById);
router.post('/recipe/add', isAdmin, recipeController.addRecipe);
router.post('/recipe/edit', isAdmin, recipeController.editRecipe);
router.delete('/recipe/delete/:id', isAdmin, recipeController.deleteRecipe);

// Ingredient routes
router.get('/ingredient-table', isAdmin, ingredientController.getAllIngredients);
router.get('/ingredient/:id', isAdmin, ingredientController.getIngredientById);
router.post('/ingredient/add', isAdmin, ingredientController.addIngredient);
router.post('/ingredient/edit', isAdmin, ingredientController.editIngredient);
router.delete('/ingredient/delete/:id', isAdmin, ingredientController.deleteIngredient);

// User routes
router.get('/user-table', isAdmin, userController.getAllUsers);
router.get('/user/:id', isAdmin, userController.getUserById);
router.post('/user/add', isAdmin, userController.addUser);
router.post('/user/edit', isAdmin, userController.editUser);
router.delete('/user/delete/:id', isAdmin, userController.deleteUser);

module.exports = router;