const express = require('express');
const app = express();
const router = require('./router/test');

const PORT = 5000;

app.use('/', router);
app.listen(PORT, () => {    console.log(`Check out the app at http://localhost:${PORT}`);});
