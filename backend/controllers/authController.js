const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    res.json({ message: "User Registered" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.setRole = async (req, res) => {
  try {
    const { role, email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email missing" });
    }

    const user = await User.findOneAndUpdate(
      { email },
      { role },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Role updated", user });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error setting role" });
  }
};
exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};