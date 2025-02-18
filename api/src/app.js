// const express = require('express');
import express from 'express';
// const corsFunc = require('./middleware/cors');
import corsFunc from './middleware/cors.js'
// const superheroRoutes = require('./routes/superheroRoutes');
import superheroRoutes from './routes/superheroRoutes.js';

const app = express();

app.use(express.json());
app.use(corsFunc);
app.use('/', superheroRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!'
    });
});

// module.exports = app;
export default app;