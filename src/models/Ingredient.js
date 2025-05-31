const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  _id: Number, // vì bạn đã dùng _id là số trong dữ liệu
  name: String,
  unit: String,
  category: String, // ví dụ: "Gia vị", "Thịt", ...
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;
