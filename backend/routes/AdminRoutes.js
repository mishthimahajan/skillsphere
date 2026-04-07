const express = require("express");
const router = express.Router();

const { getUsers, getJobs, getPayments } = require("../controllers/AdminController");

router.get("/users", getUsers);
router.get("/gigs", getJobs);
router.get("/payments", getPayments);

module.exports = router;
