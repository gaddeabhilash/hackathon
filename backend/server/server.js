const express = require("express");
const connectDB = require("../database/models/db");
const plagiarismRoutes = require("./routes/plagiarism");
const userRoutes = require("./routes/user");
const userreg = require("./routes/Register");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb://localhost:27017/plagiarismDB";
// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/plagiarism", plagiarismRoutes);
app.use("/api/user", userRoutes);
app.use("/api/user/register", userreg);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
