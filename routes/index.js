// a router for the root domain
const express = require("express");
const ctrl = require("../controllers/pagesController");

const router = express.Router();

// These run the functions stored in `controllers/mysite/pagesController.js`
router.get("/", ctrl.homePage);
router.get("/about", ctrl.aboutPage);

module.exports = router;
