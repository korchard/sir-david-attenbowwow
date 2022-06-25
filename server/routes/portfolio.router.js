const express = require('express');
const router = express.Router();
const portfolioData = require('../modules/portfolioData');

// GET ROUTE - retrieve portfolio data
router.get('/', (req, res) => {
    console.log(portfolioData);
    res.send(portfolioData);
})

module.exports = router;