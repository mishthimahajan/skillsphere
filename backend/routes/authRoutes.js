// const express = require("express");
// const router = express.Router();


// const { register, login } = require("../controllers/authController");
// const passport = require("passport");
// const { setRole } = require("../controllers/authController");


// router.post("/register", register);
// router.post("/login", login);
// router.post("/set-role", setRole);


// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   })
// );


// // router.get(
// //   "/google/callback",
// //   passport.authenticate("google", { session: false }),
// //   (req, res) => {
   
// //     res.redirect("http://localhost:5173/client");
// //   }
// // );
// router.get(
//   "/google/callback",
//   passport.authenticate("google", { session: false }),
//   (req, res) => {
//     const email = req.user.email;

    
//     res.redirect(`http://localhost:5173/select-role?email=${email}`);
//   }
// );

// module.exports = router;


const express = require("express");
const router = express.Router();

const { register, login, setRole } = require("../controllers/authController");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { getMe } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");


router.post("/register", register);
router.post("/login", login);
router.post("/set-role", setRole);
router.get("/me", protect, getMe);


router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);


router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const user = req.user;

    
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    
    res.redirect(
  `http://localhost:5173/select-role?token=${token}&email=${user.email}&name=${user.name}&image=${user.image || ""}`
  );
  }
);

module.exports = router;