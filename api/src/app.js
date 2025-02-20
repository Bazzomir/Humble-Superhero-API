import express from 'express'; // Import Express for creating the server
import corsFunc from './middleware/cors.js'; // Import the CORS middleware
import superheroRoutes from './routes/superheroRoutes.js'; // Import superhero route handlers

const app = express(); // Create an instance of the Express application

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the CORS middleware to handle cross-origin requests
app.use(corsFunc);

// Set up superhero routes on the root URL path ('/')
app.use('/', superheroRoutes);

// Error handling middleware to catch any unhandled errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack to the console
    res.status(500).json({ // Send a 500 error response with a generic error message
        error: 'Something went wrong!'
    });
});

export default app; // Export the Express app for use in the server
