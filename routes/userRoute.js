const express = require('express');
const router = express.Router();


// Define routes for /person
router.get('/', (req, res) => {
// Handle GET /person
res.send('hello world');
});

module.exports = router;