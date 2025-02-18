// const cors = require('cors');

import cors from 'cors';

const corsFunc = cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
});

// module.exports = corsFunc;

export default corsFunc