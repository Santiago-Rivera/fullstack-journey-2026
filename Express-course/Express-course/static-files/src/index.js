const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/note.txt", (req, res) => {
    res.send("<h1>Este no es un archivo</h1>");
});


app.post("/profile", (req, res) => {
  console.log(req.body);
    res.send("<h1>User Profile Page</h1>");
});

app.all("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

// app.use((req, res, next) => {
//   if (req.query.login === "santiago@nyxweb.com") {
//     next();
//   } else {
//     res.send("Access Denied: Invalid Login");
//   }
// });

app.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard Page</h1>");
});

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});