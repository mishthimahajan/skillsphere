const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");

router.get("/freelancer/earnings", async(req,res) => {
    const payments = await Payment.find({ status: "released"});
    const total = payments.reduce((sum,p) => sum + p.amount, 0);

    res.json({total,payments});
});

module.exports = router;