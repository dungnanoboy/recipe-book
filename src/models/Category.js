const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
