// Middleware to validate superhero data before processing the request
const validateSuperhero = (req, res, next) => {
    const { name, superpower, humilityScore } = req.body; // Extract data from request body
    
    // Check if all required fields are provided
    if (!name || !superpower || humilityScore === undefined) {
        return res.status(400).json({
            error: 'Missing required fields. Please provide name, superpower, and humilityScore.'
        });
    }

    // Validate humilityScore: must be a number between 0 and 10
    if (typeof humilityScore !== 'number' || humilityScore < 0 || humilityScore > 10) {
        return res.status(400).json({
            error: 'Humility Score must be a Number between 0 and 10.'
        });
    }

    next(); // Proceed to the next middleware or route handler
};

export default validateSuperhero; // Export the validation middleware
