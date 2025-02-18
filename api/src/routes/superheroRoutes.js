// const express = require('express');
import express from 'express';
const router = express.Router();
// const SuperheroController = require('../controllers/superheroController');
import SuperheroController from '../controllers/superheroController.js';
// const validateSuperhero = require('../middleware/validateSuperhero');
import validateSuperhero from '../middleware/validateSuperhero.js';

router.post('/create', validateSuperhero, SuperheroController.createSuperhero);
router.get('/', SuperheroController.getAllSuperheroes);

// module.exports = router;

export default router