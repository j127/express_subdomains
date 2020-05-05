// a router for the cats subdomain
const express = require("express");
const ctrl = require("../controllers/catsController");

const router = express.Router();

// The runs the code stored in `controllers/catsController.js`
router.get("/", ctrl.catListPage);
router.get("/cat", ctrl.catDetailPage);

module.exports = router;
