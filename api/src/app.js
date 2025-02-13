const express = require('express');
const app = express();
const corsFunc = require('./middleware/cors');
const superheroRoutes = require('./routes/superheroRoutes');

app.use(express.json());
app.use(corsFunc);
app.use('/', superheroRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!'
    });
});

module.exports = app;