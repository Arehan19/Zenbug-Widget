const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use('/uploads', express.static('uploads'));

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    maxPoolSize: 20, // ✅ Faster connections
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Route: Feedback
const feedbackRoutes = require("./routes/feedback");
app.use("/api/feedback", require("./routes/feedback"));

// const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../zenbug-widget/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../zenbug-widget/dist/index.html"));
  })
}

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
