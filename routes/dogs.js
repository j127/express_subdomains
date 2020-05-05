// a router for the dogs subdomain
const express = require("express");
const ctrl = require("../controllers/dogsController");

const router = express.Router();

// The runs the code stored in `controllers/dogsController.js`
router.get("/", ctrl.dogPage);

module.exports = router;
