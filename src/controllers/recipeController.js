const Recipe = require('../models/Recipe');
const Category = require('../models/Category');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    const categories = await Category.find();
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.id] = cat.name;
    });

    res.render('admin/recipe-table', {
      recipes,
      categoryMap,
      categories, // Pass categories for select dropdown
      title: 'Quản lý công thức'
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Server Error');
  }
};

// Get recipe by id
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Không tìm thấy công thức' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

// Add new recipe
exports.addRecipe = async (req, res) => {
  try {
    const { 
      title, 
      category_Id, 
      description,
      cookingTimeMinutes,
      servings,
      ingredients,
      instructions 
    } = req.body;

    const newRecipe = new Recipe({
      title,
      category_Id,
      description,
      cookingTimeMinutes,
      servings,
      ingredients: JSON.parse(ingredients),
      instructions: JSON.parse(instructions),
      views: 0,
      createdAt: new Date()
    });

    await newRecipe.save();
    res.redirect('/admin/recipe-table');
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).send('Server Error');
  }
};

// Edit recipe
exports.editRecipe = async (req, res) => {
  try {
    const { 
      id,
      title, 
      category_Id, 
      description,
      cookingTimeMinutes,
      servings,
      ingredients,
      instructions 
    } = req.body;

    await Recipe.findByIdAndUpdate(id, {
      title,
      category_Id,
      description,
      cookingTimeMinutes,
      servings,
      ingredients: JSON.parse(ingredients),
      instructions: JSON.parse(instructions)
    });

    res.redirect('/admin/recipe-table');
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).send('Server Error');
  }
};

// Delete recipe
exports.deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).send('Recipe deleted');
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).send('Server Error');
  }
};