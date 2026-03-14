const logger = require('./logger');

// Initialize the count variable
let count = 0;

// Increment the count and log the new value

function increment() {
    count++;
    logger.info(`[COUNTER] Count is increased to ${count}`);
    return count;
}

// Log the current count value
function currentCount() {
    logger.info(`[COUNTER] Current count is ${count}`);
    return count;
}

// Reset the count to 0 and log the reset action
function resetCount() {
    count = 0;
    logger.info(`[COUNTER] Count has been reset to ${count}`);
    return count;
}

// Export the functions for use in other modules
module.exports = {
    increment,
    currentCount,
    resetCount
};
