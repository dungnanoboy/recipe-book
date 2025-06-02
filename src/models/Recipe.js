const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: [{
    ingredient_id: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  }],
  instructions: [{
    type: String,
    required: true
  }],
  cookingTimeMinutes: {
    type: Number,
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  imageUrls: [{
    type: String
  }],
  category_Id: {  // Sửa từ categoryId thành category_Id
    type: Number,
    required: true
  },
  tags: [{
    type: String
  }],
  views: {
    type: Number,
    default: 0
  },
  userId: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware để tự động cập nhật updatedAt
recipeSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
