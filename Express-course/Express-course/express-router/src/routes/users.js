const { Router } = require("express");
const router = Router();

router.get("/UserName", (req, res) => {
  res.send("<h1>Username route</h1>");
});

router.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("<h1>User Profile Page</h1>");
});

module.exports = router;