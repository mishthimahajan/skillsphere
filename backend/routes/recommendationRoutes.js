const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/freelancer/recommendations",async(requestAnimationFrame,res) => {
    const jobs = await job.find().sort({ createAt : -1}).limit(5);
    res.json(jobs);
});

module.exports = router;