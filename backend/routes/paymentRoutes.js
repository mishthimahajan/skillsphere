// const express = require("express");
// const router = express.Router();

// const { getPayments } = require("../controllers/paymentController");

// // ✅ route
// router.get("/", getPayments);

// module.exports = router; // ✅ MUST BE router


// const express = require("express");
// const router = express.Router();

// const paymentController = require("../controllers/paymentController");

// // ✅ IMPORTANT: DO NOT CALL FUNCTION HERE

// router.post("/create-order", paymentController.createOrder);
// router.post("/verify", paymentController.verifyPayment);
// router.get("/", paymentController.getPayments);

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  createOrder,
  verifyPayment,
  releasePayment,
} = require("../controllers/paymentController");

router.post("/create-order", createOrder);
router.post("/verify", verifyPayment);
router.post("/release",releasePayment);
router.put("/payment/release/:id", async (req, res) => {
  try {
    await Payment.findByIdAndUpdate(req.params.id, {
      status: "released",
    });

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;