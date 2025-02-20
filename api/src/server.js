import app from './app.js'; // Import the Express app from the app.js file

const PORT = process.env.PORT || 3030; // Set the port to the value in the environment variable or default to 3030

// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Log a message indicating that the API is running and listening for requests
    console.log(`API running on http://localhost:${PORT}`);
});
