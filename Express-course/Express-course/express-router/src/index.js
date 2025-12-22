const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

app.set('case sensitive routing', true);
app.set('appName', 'Express Router');
app.set('port', 3000);

app.use(express.json());
app.use(morgan("dev"));

app.use(HomeRoutes)
app.use(UserRoutes)

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}/`);
});
