var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Workday = mongoose.model("Workday");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET workday templates */

/* GET workday template by id */

/* GET workday templates by week */

/* GET workday template by week and day */

/* POST workday template */

/* PATCH workday template */

/* DELETE workday template */

module.exports = router;
