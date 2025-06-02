const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;
