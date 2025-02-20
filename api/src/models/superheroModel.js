let superheroes = []; // Array to store superhero data (database)

const SuperheroModel = {
    // Create a new superhero and add it to the array
    create: (hero) => {
        const newHero = {
            id: Date.now(), // Assign a unique ID based on the current timestamp
            ...hero
        };
        superheroes.push(newHero); // Push/Add the new superhero to the array
        return newHero; // Return the created superhero
    },
    
    // Retrieve all superheroes, sorted by humilityScore in descending order
    findAll: () => {
        return [...superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
    },
    
    // Find a superhero by name (case-insensitive)
    findByName: (name) => {
        return superheroes.find(hero => hero.name.toLowerCase() === name.toLowerCase());
    }
};

export default SuperheroModel; // Export the SuperheroModel for use in other parts of the application
