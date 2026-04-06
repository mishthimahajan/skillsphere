// const Job = require("../models/Job");

// exports.createJob = async (req, res) => {
//   try {
//     const job = await Job.create({
//       ...req.body,
//       createdBy: "client@gmail.com",
//     });
//     res.json(job);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };

// exports.getJobs = async (req, res) => {
//   const jobs = await Job.find().sort({ createdAt: -1 });
//   res.json(jobs);
// };

// exports.deleteJob = async (req, res) => {
//   await Job.findByIdAndDelete(req.params.id);
//   res.json({ msg: "Deleted" });
// };


const Job = require("../models/Job");

// CREATE
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();

    res.status(201).json({ message: "Job Created" });
  } catch (err) {
    console.log(err); // 🔥 CHECK THIS IN TERMINAL
    res.status(500).json({ error: "Server Error" });
  }
};

// GET
exports.getJobs = async (req, res) => {
  const jobs = await Gig.find();
  res.json(jobs);
};

// DELETE
exports.deleteJob = async (req, res) => {
  await Gig.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
};

// UPDATE
exports.updateJob = async (req, res) => {
  const job = await Gig.findByIdAndUpdate(jobId, {
  isPaid: true
});
  res.json(job);
};