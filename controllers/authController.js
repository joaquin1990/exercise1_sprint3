const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

async function index(req, res) {
  res.render("login");
}

const login = passport.authenticate("local", {
  sucessRedirect: "/",
  failureRedirect: "/login",
});

module.exports = {
  index,
  login,
};
