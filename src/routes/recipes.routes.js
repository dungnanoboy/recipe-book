const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find({}).populate('category');
    res.render('recipes', { recipes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;