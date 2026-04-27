require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const busRoutes = require("./routes/busRoutes");
const pnrRoutes = require("./routes/pnrRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const foodRoutes = require("./routes/foodRoutes");
const helpRoutes = require("./routes/helpRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/rail-super-app";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Bus Super App API is running." });
});

app.use("/auth", authRoutes);
app.use("/buses", busRoutes);
app.use("/pnr", pnrRoutes);
app.use("/booking", bookingRoutes);
app.use("/food", foodRoutes);
app.use("/help", helpRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully.");
    const server = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use. Stop the running process or set a different PORT in your environment.`);
      } else {
        console.error("Server failed to start:", error);
      }
      process.exit(1);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
