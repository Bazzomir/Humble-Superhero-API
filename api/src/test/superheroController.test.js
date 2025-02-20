import SuperheroController from '../controllers/superheroController.js'; // Import the SuperheroController
import { jest } from '@jest/globals'; // Import Jest for testing

// Describe block for grouping tests related to SuperheroController
describe("Superhero Controller", () => {

    // Test case: Ensures getAllSuperheroes returns an array
    test("Should return an array of superheroes", async () => {
        const req = {}; // Mock request object
        const res = {
            json: jest.fn(), // Mock response.json function
        };

        // Call the controller method
        SuperheroController.getAllSuperheroes(req, res);

        // Expect the response's json method to have been called
        expect(res.json).toHaveBeenCalled();
    });
});
