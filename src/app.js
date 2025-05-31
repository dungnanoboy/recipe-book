const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Serve static files from the 'public' directory inside 'src'
app.use(express.static(path.join(__dirname, 'public')));

// Nếu muốn chuyển hướng root "/" về file index.html trong public:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});