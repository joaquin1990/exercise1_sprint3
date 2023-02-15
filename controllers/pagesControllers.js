const { sequelize, Article, User } = require("../models/index");

async function index(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("home", { articles });
}

async function create(req, res) {
  res.render("createUser");
}

async function showApiArticles(req, res) {
  const articles = await Article.findAll({ include: User });
  res.json(articles);
}

async function welcome(req, res) {
  if (req.isAuthenticated()) {
    res.send(`Te damos la bienvenida, ${req.user.firstname}!!`);
  } else {
    res.redirect("/login");
  }
}

async function loginSuccess(req, res) {}

// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   }),
// );

module.exports = { index, showApiArticles, create };
