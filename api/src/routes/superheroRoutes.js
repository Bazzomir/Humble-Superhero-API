import express from 'express'; // Import Express
const router = express.Router(); // Create an Express router instance

import SuperheroController from '../controllers/superheroController.js'; // Import the superhero controller
import validateSuperhero from '../middleware/validateSuperhero.js'; // Import validation middleware

// Route to create a new superhero (with validation middleware)
router.post('/create', validateSuperhero, SuperheroController.createSuperhero);

// Route to get all superheroes
router.get('/', SuperheroController.getAllSuperheroes);

export default router; // Export the router for use in the main app
