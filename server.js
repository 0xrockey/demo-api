const express = require("express");
const app = express();

// to pass any varible to ejs
app.set("view-engine", "ejs");

// home page with pass date to index.ejs
app.get("/", (reg, res) => {
  res.render("index.ejs", { user: "kola" });
});

// login form
app.get("/login", (reg, res) => {
  res.render("login.ejs");
});

// register form
app.get("/register", (reg, res) => {
  res.render("register.ejs");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ...👾`));
