const mongoose = require("mongoose");

const freelancerApplicationSchema = new mongoose.Schema({
  jobId: String,
  jobTitle: String,
  freelancerId: String,

  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("FreelancerApplication", freelancerApplicationSchema);