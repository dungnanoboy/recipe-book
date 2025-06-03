const Category = require('../models/Category');

// Get all categories
exports.getAllCategories = async (req, res) => {
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
};

// Get category by id
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({ id: req.params.id });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add new category
exports.addCategory = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const maxCategory = await Category.findOne().sort('-id');
    const newId = maxCategory ? maxCategory.id + 1 : 1;

    const newCategory = new Category({
      id: newId,
      name,
      icon
    });

    await newCategory.save();
    res.redirect('/admin/category-table');
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).send('Server Error');
  }
};

// Edit category
exports.editCategory = async (req, res) => {
  try {
    const { id, name, icon } = req.body;
    await Category.findOneAndUpdate(
      { id: id },
      { name, icon }
    );
    res.redirect('/admin/category-table');
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).send('Server Error');
  }
};

// Delete category
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findOneAndDelete({ id: req.params.id });
    res.status(200).send('Category deleted');
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).send('Server Error');
  }
};