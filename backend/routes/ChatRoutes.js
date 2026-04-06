const express = require("express");
const router = express.Router();
const Chat = require("../models/FreelancerChat");

router.get("/chat/:room", async (req, res) => {
  const messages = await Chat.find({ room: req.params.room });
  res.json(messages);
});

module.exports = router;