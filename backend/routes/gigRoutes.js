// const express = require("express");
// const router = express.Router();
// const Gig = require("../models/Gig");

// // CREATE GIG
// router.post("/gigs", async (req, res) => {
//   const gig = await Gig.create(req.body);
//   res.json(gig);
// });

// // GET ONLY APPROVED GIGS (IMPORTANT)
// router.get("/gigs", async (req, res) => {
//   const gigs = await Gig.find({ isApproved: true });
//   res.json(gigs);
// });

// // ADMIN APPROVE
// router.put("/admin/gig/:id", async (req, res) => {
//   await Gig.findByIdAndUpdate(req.params.id, { isApproved: true });
//   res.json({ message: "Approved" });
// });

// // ADMIN ALL GIGS
// router.get("/admin/gigs", async (req, res) => {
//   const gigs = await Gig.find();
//   res.json(gigs);
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Gig = require("../models/Gig");


// ✅ CREATE GIG
router.post("/gigs", async (req, res) => {
  try {
    const { title, description, budget } = req.body;

    if (!title || !description || !budget) {
      return res.status(400).json({ error: "All fields required" });
    }

    const gig = await Gig.create(req.body);
    res.json(gig);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET ONLY APPROVED GIGS (FREELANCER VIEW)
router.get("/gigs", async (req, res) => {
  try {
    const gigs = await Gig.find({ isApproved: true });
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ ADMIN: GET ALL GIGS
router.get("/admin/gigs", async (req, res) => {
  try {
    const gigs = await Gig.find();
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ ADMIN: APPROVE GIG
router.put("/admin/gig/:id", async (req, res) => {
  try {
    await Gig.findByIdAndUpdate(req.params.id, {
      isApproved: true,
    });

    res.json({ message: "Gig Approved ✅" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ DELETE GIG (IMPORTANT FOR ADMIN)
router.delete("/gigs/:id", async (req, res) => {
  try {
    await Gig.findByIdAndDelete(req.params.id);
    res.json({ message: "Gig Deleted ❌" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ UPDATE GIG (EDIT FEATURE)
router.put("/gigs/:id", async (req, res) => {
  try {
    const updated = await Gig.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/my-gigs/:userId", async (req, res) => {
  const gigs = await Gig.find({ createdBy: req.params.userId });
  res.json(gigs);
});
router.post("/gigs", async (req, res) => {
  try {
    const { title, description, budget, createdBy } = req.body;

    if (!createdBy) {
      return res.status(400).json({ error: "UserId missing" });
    }

    const gig = await Gig.create({
      title,
      description,
      budget,
      createdBy,
      isApproved: false
    });

    res.json(gig);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;