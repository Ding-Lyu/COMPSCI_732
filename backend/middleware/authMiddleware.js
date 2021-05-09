const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.get("Authorization");

    const decodedToken = await jwt.verify(token, process.env.TOKEN_SECRET);

    if (!decodedToken) {
      throw new Error("Unauthorized");
    }
    req.userId = decodedToken._id;
    return next();
  } catch (error) {
    return res.status(402).json({
      error: error.message
        ? "Invalid credentials (The token is missing or invalid!)"
        : "Unauthorized",
      status: 402,
    });
  }
};
