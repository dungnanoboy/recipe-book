const Ingredient = require('../models/Ingredient');

exports.getAllIngredients = async (req, res) => {
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
};

exports.getIngredientById = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: 'Không tìm thấy nguyên liệu' });
    }
    res.json(ingredient);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

exports.addIngredient = async (req, res) => {
  try {
    const { name, unit, category } = req.body;
    
    // Tìm ID lớn nhất và tăng thêm 1
    const maxIngredient = await Ingredient.findOne().sort({ _id: -1 });
    const newId = maxIngredient ? maxIngredient._id + 1 : 1;

    const newIngredient = new Ingredient({
      _id: newId,
      name,
      unit,
      category
    });

    await newIngredient.save();
    res.redirect('/admin/ingredient-table');
  } catch (error) {
    console.error('Error adding ingredient:', error);
    res.status(500).send('Server Error');
  }
};

exports.editIngredient = async (req, res) => {
  try {
    const { id, name, unit, category } = req.body;
    await Ingredient.findByIdAndUpdate(id, {
      name,
      unit,
      category
    });
    res.redirect('/admin/ingredient-table');
  } catch (error) {
    console.error('Error updating ingredient:', error);
    res.status(500).send('Server Error');
  }
};

exports.deleteIngredient = async (req, res) => {
  try {
    await Ingredient.findByIdAndDelete(req.params.id);
    res.status(200).send('Ingredient deleted');
  } catch (error) {
    console.error('Error deleting ingredient:', error);
    res.status(500).send('Server Error');
  }
};