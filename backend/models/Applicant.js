const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: String,
  jobTitle: String,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Applicant", applicantSchema);