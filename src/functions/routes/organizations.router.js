const express = require('express');
const router = express.Router();
const organizationData = require('../modules/organizationData');

// GET ROUTE - retrieve organization data
router.get('/', (req, res) => {
    console.log(organizationData);
    res.send(organizationData);
})

module.exports = router;

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}