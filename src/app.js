const express = require('express');
const connectDB = require('./config/db');
const initMiddleware = require('./middleware');
const expressMiddleware = require('./middleware/express');

// Import routes 
const indexRouter = require('./routes/index.routes');
const recipesRouter = require('./routes/recipes.routes');
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

// Áp dụng middleware
initMiddleware(app);
expressMiddleware(app);

// Connect to the database
connectDB();

// Log request body before defining routes
app.use((req, res, next) => {
  //console.log('Body:', req.body);
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/', recipesRouter);
app.use('/admin', authRoutes);
app.use('/admin', adminRoutes);

// Root route
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});