const express = require("express");
const pageController = require("../controllers/pagesControllers");
const authController = require("../controllers/authController");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", isAuthenticated, pageController.index);
router.get("/registrar/usuario", pageController.create);
router.get("/login", authController.index);
router.post("/login", authController.login);

module.exports = router;
