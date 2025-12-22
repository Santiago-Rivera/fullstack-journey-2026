const express = require("express");
const { get } = require("http");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.set("appName", "Express Course");
app.set("port", 4000);
app.set("case sensitive routing", true);

app.use(express.json());
app.use(morgan("dev"));

app.get("/note.txt", (req, res) => {
  res.send("<h1>este no es un archivo</h1>")
})

app.get("/UserName", (req, res) => {
  res.send("<h1>Username route</h1>")
})

app.post("/profile", (req, res) => {
    console.log(req.body);
    res.send("<h1>User Profile Page</h1>");
});

app.all("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.use((req, res, next) => {
  if (req.query.login === "santiago@nyxweb.com") {
    next();
  } else {
    res.send("Access Denied: Invalid Login");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard Page</h1>");
});

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get('port'), () => {
  console.log(`Server ${app.get('appName')} running  at http://localhost:${app.get('port')}/`);
});
