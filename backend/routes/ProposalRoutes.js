const express = require("express");
const router = express.Router();
const Proposal = require("../models/Proposal");

// SUBMIT PROPOSAL
router.post("/proposal", async (req, res) => {
  const proposal = await Proposal.create(req.body);
  res.json(proposal);
});

// GET ALL PROPOSALS (CLIENT)
router.get("/proposals", async (req, res) => {
  const proposals = await Proposal.find();
  res.json(proposals);
});

// ACCEPT
router.put("/proposal/accept/:id", async (req, res) => {
  await Proposal.findByIdAndUpdate(req.params.id, { status: "accepted" });
  res.json({ message: "Accepted" });
});

// REJECT
router.put("/proposal/reject/:id", async (req, res) => {
  await Proposal.findByIdAndUpdate(req.params.id, { status: "rejected" });
  res.json({ message: "Rejected" });
});

module.exports = router;