import { getSuperheroes, postSuperheroes } from "../api/api"; // Import the functions to fetch and post superhero data

global.fetch = jest.fn(); // Mock global fetch function to simulate API requests
global.alert = jest.fn(); // Mock global alert function for simulating alert calls in tests

describe('API tests', () => {
    beforeEach(() => {
        fetch.mockClear(); // Clear mock data before each test to ensure no data is carried over
    });

    // Test for the getSuperheroes function
    test('getSuperheroes fetches data correctly', async () => {
        const mockData = [{ name: "Batman", superpower: "Money", humilityScore: 7 }]; // Mock data to simulate API response
        fetch.mockResolvedValue({
            ok: true, // Simulate a successful response
            json: jest.fn().mockResolvedValue(mockData) // Mock the JSON method to return mock data
        });

        const data = await getSuperheroes(); // Call the function
        expect(fetch).toHaveBeenCalledWith('http://localhost:3030/'); // Ensure the fetch was called with the correct URL
        expect(data).toEqual(mockData); // Verify the response is the same as the mock data
    });

    // Test for the postSuperheroes function
    test('postSuperheroes sends data correctly', async () => {
        const newHero = { name: "Superman", superpower: "Flight", humilityScore: 9 }; // New superhero data to post
        fetch.mockResolvedValue({
            ok: true, // Simulate a successful response
            json: jest.fn().mockResolvedValue({ message: "Superhero successfully added!" }) // Mock success message
        });

        const response = await postSuperheroes(newHero); // Call the function
        // Verify the fetch was called with the correct parameters
        expect(fetch).toHaveBeenCalledWith('http://localhost:3030/create', expect.objectContaining({
            method: 'POST', // Ensure it's a POST request
            headers: { 'Content-Type': 'application/json' }, // Ensure the request includes the correct header
            body: JSON.stringify(newHero) // Ensure the request body contains the correct superhero data
        }));
        expect(response).toEqual({ message: "Superhero successfully added!" }); // Verify the response matches the success message
    });
});
