const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/blog-post', (req, res) => {
  res.render('blog-post');
});

router.get('/elements', (req, res) => {
  res.render('elements');
});

router.get('/receipe-post', (req, res) => {
  res.render('receipe-post');
});

module.exports = router;