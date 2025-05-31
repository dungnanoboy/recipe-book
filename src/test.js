const connectDB = require('./src/config/db'); // đường dẫn tới file connectDB của bạn
const User = require('./src/models/User');    // đường dẫn tới model User
const Category = require('./src/models/Category');
const Ingredient = require('./src/models/Ingredient');
const Recipe = require('./src/models/Recipe');

const run = async () => {
  await connectDB(); // Kết nối đến MongoDB

  // Lấy tất cả user
  const users = await User.find({});
  const categories = await Category.find({});
  const ingredients = await Ingredient.find({});
  const recipes = await Recipe.find({});

  console.log('Danh sách người dùng:', users);
  console.log('Categories:', categories);
  console.log('Ingredients:', ingredients);
  console.log('Recipes:', recipes);
};

run();
