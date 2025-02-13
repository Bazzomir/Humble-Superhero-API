const cors = require('cors');

const corsFunc = cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
});

module.exports = corsFunc;