const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [
    {
      ingredient_id: Number, // tham chiếu theo _id của ingredients
      amount: Number,        // số lượng nguyên liệu
    },
  ],
  instructions: [String],     // các bước nấu ăn
  cookingTimeMinutes: Number, // thời gian nấu
  servings: Number,           // số khẩu phần
  imageUrls: [String],        // ảnh (nếu có)
  category_Id: Number,        // tham chiếu đến Category
  tags: [String],             // ví dụ: ["phở", "món nước"]
  views: Number,
  createdAt: Date,
  updatedAt: Date,
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
