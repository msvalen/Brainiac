const express = require('express');
const router = express.Router();

const Score = require('../models/Scores')


// All Scores route
router.get('/', async (req, res) => {
    try {
        const scores = await Score.all
        res.status(200).json({scores});
    } catch(err) {
        res.status(500).json({err})
    }
})

// Create score route
router.post('/', async (req, res) => {
    try {
        const score = await Score.create(req.body.score)
        res.status(201).json(score);
    } catch (err) {
        res.status(500).json({ err });
    }
});



module.exports = router;