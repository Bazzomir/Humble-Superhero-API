import { getSuperheroes, postSuperheroes } from "../api/api";

global.fetch = jest.fn();
global.alert = jest.fn();

describe('API tests', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    test('getSuperheroes fetches data correctly', async () => {
        const mockData = [{ name: "Batman", superpower: "Money", humilityScore: 7 }];
        fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockData)
        });

        const data = await getSuperheroes();
        expect(fetch).toHaveBeenCalledWith('http://localhost:3030/');
        expect(data).toEqual(mockData);
    });

    test('postSuperheroes sends data correctly', async () => {
        const newHero = { name: "Superman", superpower: "Flight", humilityScore: 9 };
        fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue({ message: "Superhero successfully added!" })
        });

        const response = await postSuperheroes(newHero);
        expect(fetch).toHaveBeenCalledWith('http://localhost:3030/create', expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHero)
        }));
        expect(response).toEqual({ message: "Superhero successfully added!" });
    });
});

