const axios = require('axios');

module.exports = {
    async getRecipesByIngredients(ingredients) {
        try {
            return axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}`);
        }
        catch (error) {
            throw error.response || error;
        }
    }
}