const express = require("express");
const router = express.Router();

const {
  getUsers,
  getJobs,
  getPayments
} = require("../controllers/adminController");

// ✅ IMPORTANT: all must be FUNCTIONS
router.get("/users", getUsers);
router.get("/gigs", getJobs);
router.get("/payments", getPayments);

// module.exports = router;
module.exports = {
    test: (req, res) => {
        res.send("Admin controller working!");
    }
};