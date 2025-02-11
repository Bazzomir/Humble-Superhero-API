const SuperheroModel = require('../models/superheroModel');

const SuperheroController = {
    createSuperhero: (req, res) => {
        const {name, superpower, humilityScore} = req.body;

        if(SuperheroModel.findByName(name)) {
            return res.status(409).json({
                error: 'A superhero with this name already exists!'
            });
        }

        const newHero = SuperheroModel.create({name, superpower, humilityScore});
        res.status(201).json(newHero);
    },

    getAllSuperheroes: (req, res) => {
        const heroes = SuperheroModel.findAll();
        req.json(heroes);
    }
};

module.exports = SuperheroController;