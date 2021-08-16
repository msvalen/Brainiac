const express = require('express');
const router = express.Router();

const Score = require('../models/Scores')


// All Scores route
router.get('/', async (req, res) => {
    try {
        const scores = await Score.all
        res.json({scores})
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports = router;