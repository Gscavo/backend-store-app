const express = require("express");
const userModel = require("../../../models/user.model");
const errorLog = require("../../../modules/error")
const router = express.Router();

// Deleta usuário com email especificado
router.delete("/drop", async (req, res) => {
    await userModel.deleteMany({}) 
        .then(_ => res.redirect('/users/'))
        .catch( err => errorLog(res, err));
})

// Deleta usuário com email especificado
router.delete("/email/:email", async (req, res) => {
    const email = req.params.email;

    await userModel.findOneAndDelete({email: email})
        .then(_ => res.redirect('/users/'))
        .catch( err => errorLog(res, err));
})

module.exports = router;