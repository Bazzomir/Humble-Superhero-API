import SuperheroModel from '../models/superheroModel.js'; // Import the superhero data 

const SuperheroController = {
    // Controller method to create a new superhero
    createSuperhero: (req, res) => {
        const { name, superpower, humilityScore } = req.body; // Details from request body
        
        // Check if a superhero with the same name already exists
        if (SuperheroModel.findByName(name)) {
            return res.status(409).json({
                error: 'A superhero with this name already exists!'
            });
        }
        
        // Create a new superhero and save it
        const newHero = SuperheroModel.create({ name, superpower, humilityScore });
        res.status(201).json(newHero); // Respond with the newly created superhero
    },
    
    // Controller method to retrieve all superheroes
    getAllSuperheroes: (req, res) => {
        const heroes = SuperheroModel.findAll(); // Fetch all superheroes
        res.json(heroes); // Respond with the list of superheroes
    }
};

export default SuperheroController; // Export the SuperheroController for use in other parts of the application
