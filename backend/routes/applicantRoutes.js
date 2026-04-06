const router = require("express").Router();
const { getApplicants } = require("../controllers/applicantController");

router.get("/", getApplicants);
router.get("/gig/:id/applicants", async (req, res) => {
  const applicants = await Applicant.find({ jobId: req.params.id });
  res.json(applicants);
});

module.exports = router;