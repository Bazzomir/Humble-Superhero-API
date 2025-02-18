// const app = require('./app');
import app from './app.js';
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});