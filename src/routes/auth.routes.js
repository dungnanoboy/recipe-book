const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Login page
router.get('/login', (req, res) => {
  res.render('admin/pages-login', { message: '' });
});

// Register page 
router.get('/register', (req, res) => {
  res.render('admin/pages-register', { message: '' });
});

// Handle login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password }); // Log thông tin đăng nhập

    const user = await User.findOne({ email });
    console.log('Found user:', user); // Log user tìm được

    if (!user) {
      console.log('User not found');
      return res.render('admin/pages-login', { 
        message: 'Invalid email or password' 
      });
    }

    // So sánh password trực tiếp
    if (password !== user.password) {
      console.log('Invalid password');
      return res.render('admin/pages-login', {
        message: 'Invalid email or password'
      });
    }

    // Set user session
    req.session.user = {
      id: user.id,
      role: user.role
    };
    console.log('Session set:', req.session.user); // Log session data

    // Redirect based on role
    console.log('User role:', user.role); // Log role
    if (user.role === 'admin') {
      console.log('Redirecting to admin');
      return res.redirect('/admin');
    } else {
      console.log('Redirecting to home');
      return res.redirect('/');
    }

  } catch (error) {
    console.error('Login error:', error);
    res.render('admin/pages-login', {
      message: 'Server error occurred'
    });
  }
});

// Handle register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.render('admin/pages-register', {
        message: 'User already exists'
      });
    }

    // Create new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      username: name,
      email,
      password: hashedPassword,
      role: 'user' // Default role
    });

    await user.save();
    res.redirect('/admin/login');

  } catch (error) {
    console.error(error);
    res.render('admin/pages-register', {
      message: 'Server error occurred'  
    });
  }
});

// Thêm vào auth.routes.js
router.get('/test-session', (req, res) => {
    console.log('Current session:', req.session);
    res.json(req.session);
});

// Add admin dashboard route
router.get('/', (req, res) => {
  // Check if user is logged in and is admin
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.redirect('/admin/login');
  }
  res.render('admin/index');
});

module.exports = router;