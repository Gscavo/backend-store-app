const express = require("express");

const getRoute = require("./methods/get")
const postRoute = require("./methods/post")
const deleteRoute = require("./methods/delete")

const router = express.Router();

router.use("/get", getRoute)
router.use("/save", postRoute)
router.use("/del", deleteRoute)

module.exports = router