import cors from 'cors'; // Import the CORS middleware

const corsFunc = cors({
    origin: 'http://localhost:3000', // Allow requests only from this origin
    methods: ['GET', 'POST'], // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'] // Allow only requests with 'Content-Type' header
});

export default corsFunc; // Export the configured CORS middleware
