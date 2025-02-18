// const request = require('supertest');
// const app = require('../app');
// import { request } from 'supertest';

import request from 'supertest';
import app from '../app.js'

describe("Superhero Api", () => {
    test("GET Superheroes should return status 200", async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });
});