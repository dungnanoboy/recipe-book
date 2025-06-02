const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

// Import routes 
const indexRouter = require('./routes/index.routes');
const recipesRouter = require('./routes/recipes.routes');

const app = express();

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// Connect to the database
connectDB();

// Serve static files from the 'public' directory inside 'src'
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
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