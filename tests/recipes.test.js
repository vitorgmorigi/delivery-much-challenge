const request = require('supertest');
const app = require('../src/index');


describe('Searching recipes', () => {
    it('Should return 400 when the user does not enter ingredients', async () => {
        const response = await request(app).get('/recipes');
        expect(response.status).toBe(400);
        expect(response.text).toBe(JSON.stringify({error: 'Enter at least one ingredient.'}));
    })

    it('Should return 400 when the user enter more than 3 ingredients', async () => {
        const ingredients = 'tomato,onions,beef,milk';

        const response = await request(app).get(`/recipes?i=${ingredients}`);
        expect(response.status).toBe(400);
        expect(response.text).toBe(JSON.stringify({error: 'The maximum number of ingredients allowed is 3.'}));
    })

    it('Should return 200 when the user enter with 3 ingredients or less', async () => {
        const oneIngredient = 'tomato';
        const twoIngredients = 'tomato,onions';
        const threeIngredients = 'tomato,onions,beef';
        let response;

        response = await request(app).get(`/recipes?i=${oneIngredient}`);
        expect(response.status).toBe(200);

        response = await request(app).get(`/recipes?i=${twoIngredients}`);
        expect(response.status).toBe(200);

        response = await request(app).get(`/recipes?i=${threeIngredients}`);
        expect(response.status).toBe(200);

    })

    it('The keywwords should return a sorted array', async () => {
        const ingredients = 'tomato,beef,onions';

        const response = await request(app).get(`/recipes?i=${ingredients}`);
        expect(response.body.keywords).toStrictEqual(['beef', 'onions', 'tomato']);
    })

    it('The ingredients list of a recipe should return a sorted array', async () => {
        const ingredients = 'milk,onions';

        const response = await request(app).get(`/recipes?i=${ingredients}`);
        response.body.recipes.forEach(element => {
            expect(element.ingredients).toStrictEqual(Array.from(element.ingredients).sort());
        });
    })

})