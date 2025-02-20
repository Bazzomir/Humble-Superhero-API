import request from 'supertest'; // Import Supertest for making HTTP requests in tests
import app from '../app.js'; // Import the app to be tested

// Setup block that runs before all tests
beforeAll(async () => {
    // Create superheroes before running the test
    await request(app)
        .post('/create')
        .send({ name: 'Superman', superpower: 'Flying', humilityScore: 8 });
    await request(app)
        .post('/create')
        .send({ name: 'Batman', superpower: 'Martial Arts', humilityScore: 9 });
});

describe("Superhero Api", () => {
    // Test case: Ensures the GET request to retrieve superheroes returns status 200 and a non-empty array
    test("GET Superheroes should return status 200", async () => {
        // Make a GET request to the root endpoint
        const res = await request(app).get('/');

        // Assert that the response status code is 200
        expect(res.statusCode).toBe(200);

        // Assert that the response body is an array
        expect(res.body).toBeInstanceOf(Array);

        // Assert that the response body contains at least one superhero
        expect(res.body.length).toBeGreaterThan(0);
    });
});
