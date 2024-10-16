const express = require("express");
const router = express.Router();

// Define the route that renders an EJS file
router.get("/", (req, res) => {
  res.render("index"); // This will render views/index.ejs
});

module.exports = router;
