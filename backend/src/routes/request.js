const express = require("express");
const auth = require("../middlewares/auth");
const User = require("../models/user");

const router = express.Router();

router.get("/user/feed", auth, async (req, res) => {
  const users = await User.find({ _id: { $ne: req.userId } });
  res.json(users);
});

router.get("/user/connections", auth, async (req, res) => {
  res.json([]);
});

router.get("/user/requests", auth, async (req, res) => {
  res.json([]);
});

router.post("/request/send/:status/:userId", auth, async (req, res) => {
  res.send(`Request ${req.params.status}`);
});

router.post("/request/review/:status/:requestId", auth, async (req, res) => {
  res.send(`Review ${req.params.status}`);
});

module.exports = router;
