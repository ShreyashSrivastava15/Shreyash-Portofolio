const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const connectDB = require("./config/database");

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use("/api/", limiter);

connectDB();

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

app.listen(7777, () => {
  console.log("Server running on port 7777");
});
