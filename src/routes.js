// routes.js

const logger = require('./logger');
const express = require('express');
const router = express.Router();
const counter = require('./counter');

// Define routes for counter operations
// Route to increment the count value
router.get('/counter-increase', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-increase'`);
    const newCount = counter.increment();
    res.json({ count: newCount });
});

// Route to read the current count value
router.get('/counter-read', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-read'`);
    const currentCount = counter.currentCount();
    res.json({ count: currentCount });
});

// Route to reset the count value to 0
router.get('/counter-reset', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-reset'`);
    const resetCount = counter.resetCount();
    res.json({ count: resetCount });
});

module.exports = router;
