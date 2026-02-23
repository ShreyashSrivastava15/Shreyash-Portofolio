const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailId: { type: String, required: true, unique: true },
    city: { type: String },
    phoneNumber: { type: String },
    password: { type: String },
    skills: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
