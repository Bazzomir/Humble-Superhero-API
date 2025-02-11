const express = require('express');
const superheroRouters = require('./routes/superheroRoutes');

const app = express();

app.use(express.json())
app.use('/api/superheroes', superheroRouters);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!'
    });
});

module.exports = app;