const express = require("express");
const cors = require("cors");
const path = require("path");

const birthdayRoute = require("./routes/birthday");

const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());

app.use(
  "/images",
  express.static(path.join(__dirname, "../client/public/images"))
);

app.use("/api/birthday", birthdayRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Birthday API is running 🎂"
  });
});

app.listen(PORT, () => {
  console.log(`🎂 Birthday server running at http://localhost:${PORT}`);
});