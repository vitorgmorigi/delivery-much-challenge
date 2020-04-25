const giphyService = require('../services/giphyService');
const recipePuppyService = require('../services/recipePuppyService');

function sortIngredients(ingredients) {
    if(ingredients.indexOf(',') === -1) {
        return [ingredients];
    }
    else {
        const ingredientsToArray = ingredients.split(', ');
        const sortedIngredients = ingredientsToArray.sort();
        return sortedIngredients;
    }
}


module.exports = {

    async findRecipesWithGif (request, response) {

        if (request.query.i === undefined) {
            return response.status(400).json({error: 'Enter at least one ingredient.'});
        }
        
        const keywords = request.query.i.split(',').sort();

        if (keywords.length > 3) {
            return response.status(400).json({error: 'The maximum number of ingredients allowed is 3.'});
        }

        try {
            const recipesPuppyResponse = await recipePuppyService.getRecipesByIngredients(request.query.i);

            if(recipesPuppyResponse.data.results.length === 0) {
                return response.status(404).json({message: 'No recipes found.'})
            }

            const recipes = recipesPuppyResponse.data.results.map(async (recipe) => {
                    const giphyResponse = await giphyService.findGifByWord(recipe.title);
                    return {
                        title: recipe.title,
                        ingredients: sortIngredients(recipe.ingredients),
                        link: recipe.href,
                        gif: giphyResponse.url
                    };
                });

            
            recipePromisses = await Promise.all(recipes);
            
            return response.json({keywords, recipePromisses});

        }

        catch (error) {
            return response.status(404).json({error: 'Request processing failed.'})
        }
    }

}