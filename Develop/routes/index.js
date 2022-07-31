const express = require('express');

// Import our modular routers for /api
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/api', apiRouter);

module.exports = app;