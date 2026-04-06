const Razorpay = require("razorpay");
const Payment = require("../models/Payment");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// ✅ CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const { amount, jobId } = req.body;

    console.log("BODY:", req.body);

    if (!amount || !jobId) {
      return res.status(400).json({
        error: "Amount or JobId missing",
      });
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // ✅ important
      currency: "INR",
    });

    // ✅ SAVE PAYMENT IN DB
    await Payment.create({
      jobId,
      amount,
      status: "pending",
      razorpay_order_id: order.id,
    });

    res.json(order);

  } catch (err) {
    console.log("CREATE ORDER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ VERIFY PAYMENT
exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id } = req.body;

    await Payment.findOneAndUpdate(
      { razorpay_order_id },
      {
        razorpay_payment_id,
        status: "escrow",
      }
    );

    res.json({ success: true });

  } catch (err) {
    console.log("VERIFY ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
exports.releasePayment = async (req, res) => {
  try {
    const { paymentId } = req.body;

    await Payment.findByIdAndUpdate(paymentId, {
      status: "released"
    });

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};