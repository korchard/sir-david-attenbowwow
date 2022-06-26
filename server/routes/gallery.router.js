const express = require('express');
const router = express.Router();
const galleryData = require('../modules/galleryData');

// GET ROUTE - retrieve gallery data
router.get('/', (req, res) => {
    console.log(galleryData);
    res.send(galleryData);
})

module.exports = router;