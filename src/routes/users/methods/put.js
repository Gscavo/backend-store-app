const express = require("express");
const userModel = require("../../../models/user.model");

const router = express.Router();

router.put('/username/:username', (req, res) => {
    const username = req.params.username;

    if (userModel.findOne( {username: username} ) == undefined) { return }


})

modules.exports = router;