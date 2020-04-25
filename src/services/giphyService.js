const axios = require('axios');

module.exports = {
    async findGifByWord (word) {
        try {
           const giphyApiResponse = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${word}&limit=1`);
           const gif = giphyApiResponse.data.data.length ? giphyApiResponse.data.data[0] : {};
           
           return gif;
        }
    
        catch (error) {
            throw error.response || error;
        }
    }
}