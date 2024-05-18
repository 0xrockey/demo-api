if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// import
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const initPassport = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");

// initialize passport
initPassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

// local Variable
const users = [];

// config
app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// home page with pass date to index.ejs
app.get("/", (reg, res) => {
  res.render("index.ejs", { name: reg.user.name });
});

// login form
app.get("/login", (reg, res) => {
  res.render("login.ejs");
});
// post login
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// register form
app.get("/register", (reg, res) => {
  res.render("register.ejs");
});

// post register
app.post("/register", async (req, res) => {
  try {
    // create hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  //
  // console.log(users);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ...👾`));
