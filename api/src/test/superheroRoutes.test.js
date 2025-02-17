const request = require('supertest');
const app = require('../app');

describe("Superhero Api", () => {
    test("GET Superheroes should return status 200", async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });
});