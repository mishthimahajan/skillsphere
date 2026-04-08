const express = require("express");
const router = express.Router();
const App = require("../models/FreelancerApplication");
const Job = require("../models/Job");


router.post("/freelancer/apply", async (req, res) => {
  const { jobId } = req.body;

  const job = await Job.findById(jobId);

  const app = await App.create({
    jobId,
    jobTitle: job.title,
    freelancerId: "demoUser",
  });

  res.json(app);
});


router.get("/client/applications", async (req, res) => {
  const apps = await App.find();
  res.json(apps);
});

// ACCEPT
router.put("/client/application/accept/:id", async (req, res) => {
  await App.findByIdAndUpdate(req.params.id, { status: "accepted" });
  res.json({ message: "Accepted" });
});


router.put("/client/application/reject/:id", async (req, res) => {
  await App.findByIdAndUpdate(req.params.id, { status: "rejected" });
  res.json({ message: "Rejected" });
});


router.get("/freelancer/applications", async (req, res) => {
  const apps = await App.find();
  res.json(apps);
});

module.exports = router;