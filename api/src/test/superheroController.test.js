// const SuperheroController = require('../controllers/superheroController');
import SuperheroController from '../controllers/superheroController.js';
import { jest } from '@jest/globals';

describe("Superhero Controller", () => {
    test("Should retrun an array of superhero", async () => {
        const req = {};
        const res = {
            json: jest.fn(),
        };

        // await SuperheroController(req, res);
        SuperheroController.getAllSuperheroes(req, res);

        expect(res.json).toHaveBeenCalled();
    });
});