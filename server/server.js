
const express = require("express");
const cors = require("cors");

const birthdayRoute = require("./routes/birthday");

const app = express();

const PORT = 5000;

// Allow requests from the frontend
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Birthday API
app.use("/api/birthday", birthdayRoute);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Birthday API is running 🎂"
  });
});


app.listen(PORT, () => {
  console.log(`🎂 Birthday server running at http://localhost:${PORT}`);
});
