const express = require('express');
const RecipeController = require('./controllers/RecipeController');

const routes = express.Router();


routes.get('/recipes', RecipeController.findRecipesWithGif);


module.exports = routes;
