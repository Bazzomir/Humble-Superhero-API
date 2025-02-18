const validateSuperhero = (req, res, next) => {
    const { name, superpower, humilityScore } = req.body;
    
    if (!name || !superpower || humilityScore === undefined) {
        return res.status(400).json({
            error: 'Missing required fields. Please provide name, superpower, and humilityScore.'
        });
    }

    if (typeof humilityScore !== 'number' || humilityScore < 0 || humilityScore > 10) {
        return res.status(400).json({
            error: 'Humility Score must be a Number between 0 and 10.'
        });
    }

    next();
};

// module.exports = validateSuperhero;
export default validateSuperhero;