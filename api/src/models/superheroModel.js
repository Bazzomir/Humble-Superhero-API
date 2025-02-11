let superheroes = [];

const SuperheroModel = {
    create: (hero) => {
        const newHero = {
            id: Date.now(),
            ...hero
        };
        superheroes.push(newHero);
        return newHero;
    },

    findAll: () => {
        return [...superheroes].sort((a,b) => b.humilityScore - a.humilityScore);
    },

    findByName: (name) => {
        return superheroes.find(hero => hero.name.toLowerCase() === name.toLowerCase());
    }

};

module.exports = SuperheroModel;