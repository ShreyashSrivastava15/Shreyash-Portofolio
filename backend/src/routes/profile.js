const express = require("express");
const User = require("../models/user");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/profile/view", auth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
});

router.patch("/profile/edit", auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.userId, req.body, {
    new: true
  });
  res.json(user);
});

router.patch("/profile/password", auth, async (req, res) => {
  await User.findByIdAndUpdate(req.userId, {
    password: req.body.password
  });
  res.send("Password updated");
});

module.exports = router;
