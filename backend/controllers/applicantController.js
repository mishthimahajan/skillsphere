const Applicant = require("../models/Applicant");

exports.getApplicants = async (req, res) => {
  const data = await Applicant.find();
  res.json(data);
};