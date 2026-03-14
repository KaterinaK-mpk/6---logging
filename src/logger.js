const { createLogger, transports, format } = require('winston');

// Create a logger instance with specified configuration
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  // Define transports for logging to console and files
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});
// Export the logger instance for use in other modules
module.exports = logger;
