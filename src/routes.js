const express = require('express');
const RecipesController = require('./controllers/RecipeController');

const routes = express.Router();


routes.get('/recipes', RecipesController.findRecipesWithGif);


module.exports = routes;
