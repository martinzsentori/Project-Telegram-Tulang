const express = require("express");
const app = express();
const port = 3250;
const path = require("path");

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory where your EJS files will be located (optional)
app.set("views", path.join(__dirname, "views"));

// Middleware to handle static files (like CSS, JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

const homeRoute = require("./Routes/Home");
app.use("/", homeRoute);
// app.get("/", async (req, res) => {
//   res.render("index");
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
