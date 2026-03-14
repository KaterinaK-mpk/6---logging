// main.js

const express = require('express');
const app = express();
const routes = require('./routes');
const logger = require('./logger');

// Task 1
// Testing logger functionality with different log levels 
logger.log('info', 'This is an informational message.');
logger.log('warn', 'This is a warning message.');
logger.log('error', 'This is an error message.');

logger.info('This is another informational message.');
logger.warn('This is another warning message.');
logger.error('This is another error message.');
// Task 1 end here

// Task 2
// Starting the application and setting up routes with logging
logger.info('[MAIN] Starting application...');

// Use the defined routes for handling requests
app.use('/', routes);
logger.info('[MAIN] Application is ready to accept requests.');

// Start the server and log the port it's running on
const PORT = process.env.PORT || 3000;
// Log the server start event
const server = app.listen(PORT, () => {
    logger.info(`[MAIN] Server is running on port ${PORT}`);
});

// Handle shutdown with logging to ensure graceful exit
process.on('SIGINT', () => {
    logger.info('[MAIN] Shutting down application...');
    server.close(() => {
        logger.info('[MAIN] Application has been shut down.');
        process.exit(0);
    });
});
