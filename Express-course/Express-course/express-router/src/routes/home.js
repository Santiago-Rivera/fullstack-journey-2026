const { Router } = require("express");
const router = Router();

router.all("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

router.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard Page</h1>");
});

module.exports = router