const express = require("express");
const User = require("../models/user");
const { validateSignup } = require("../utils/validation");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    validateSignup(req.body);
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { emailId } = req.body;
  const user = await User.findOne({ emailId });
  if (!user) return res.status(404).send("User not found");
  res.json({ token: user._id });
});

router.post("/logout", async (req, res) => {
  res.send("Logged out");
});

module.exports = router;
