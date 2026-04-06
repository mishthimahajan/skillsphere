const User = require("../models/User");
const Gig = require("../models/Gig");
const Payment = require("../models/Payment");

// ✅ GET ALL USERS
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET ALL JOBS
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Gig.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};