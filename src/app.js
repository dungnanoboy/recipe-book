const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

// Import routes 
const indexRouter = require('./routes/index.routes');
const recipesRouter = require('./routes/recipes.routes');

const app = express();

// Cấu hình EJS đúng
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // ✅ Đặt đúng thư mục views

// Connect to the database
connectDB();

// Phục vụ file tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

// Sau đó mới đến các routes
app.use('/', indexRouter);
app.use('/', recipesRouter);

// Sử dụng res.render thay vì res.sendFile
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});