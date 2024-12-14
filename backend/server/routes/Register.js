const express = require("express");
const router = express.Router();
const User = require("../../database/models/User");
const bcrypt = require("bcryptjs");

// POST /api/user/register
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Incoming request body:", req.body); // Log request body for debugging

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log("New user created:", newUser); // Log the new user

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error during registration:", error); // Log errors for debugging
    res.status(500).json({ error: "An error occurred during registration." });
  }
});

module.exports = router;
