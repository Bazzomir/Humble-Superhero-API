const express = require('express');
const router = express.Router();
const SuperheroController = require('../controllers/superheroController.js');

router.post('/', SuperheroController.createSuperhero);
router.get('/', SuperheroController.getAllSuperheroes);

module.exports = router;