const express = require('express');
const router = express.Router();
const SuperheroController = require('../controllers/superheroController');
const validateSuperhero = require('../middleware/validateSuperhero');

router.post('/create', validateSuperhero, SuperheroController.createSuperhero);
router.get('/', SuperheroController.getAllSuperheroes);

module.exports = router;