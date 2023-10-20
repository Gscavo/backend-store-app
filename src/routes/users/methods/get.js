const express = require("express");
const UserModel = require("../../../models/user.model");

const router = express.Router();

// Retorna os Users
router.get("/", async (req, res) => {
    await UserModel.find({})
        .then((users) =>{ 
            res.status(200).json(users)
        })
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

// Retorna o User com Id especifico
router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    await UserModel.findById(id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

// Retorna o User com email especifico
router.get("/email/:email", async (req, res) => {
    const email = req.params.email
    await UserModel.find({email: email})
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

// Retorna o User com username especifico
router.get("/username/:username", async (req, res) => {
    const username = req.params.username;

    await UserModel.find({username: username})
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

module.exports = router;