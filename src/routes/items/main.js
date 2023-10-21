const express = require("express");
const getRoute = require("./methods/get");
const postRoute = require("./methods/post");
const deleteRoute = require("./methods/delete");

const router = express.Router();

router.use("", getRoute);
router.use("", postRoute);
router.use("", deleteRoute);

module.exports = router