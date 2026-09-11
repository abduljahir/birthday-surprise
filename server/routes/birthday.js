const express = require("express");
const router = express.Router();

const birthdayData = require("../data/birthday.json");

router.get("/", (req, res) => {
  res.json(birthdayData);
});

module.exports = router;