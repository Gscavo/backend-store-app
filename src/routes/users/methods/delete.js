const express = require("express");
const UserModel = require("../../../models/user.model");

const router = express.Router();

// Deleta usuário com email especificado
router.delete("/drop", async (req, res) => {
    await UserModel.deleteMany({}) 
        .then(_ => res.redirect('/users/get/'))
        .catch( err => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

// Deleta usuário com email especificado
router.delete("/email/:email", async (req, res) => {
    const email = req.params.email;

    await UserModel.findOneAndDelete({email: email})
        .then(_ => res.redirect('/users/get/'))
        .catch( err => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

module.exports = router;