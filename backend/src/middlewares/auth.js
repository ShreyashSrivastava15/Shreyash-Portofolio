const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "Authentication required. Please login." });
    }

    const decodedObj = await jwt.verify(token, process.env.JWT_SECRET || "DEV_SECRET_KEY");
    const { _id } = decodedObj;

    // Attach user ID to request for downstream usage
    req.userId = _id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token. Authentication failed." });
  }
};

module.exports = { userAuth };
