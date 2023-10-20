const express = require("express");
const UserModel = require("../models/user.model");

const router = express.Router();

router.use('/view', (req, res, next) => {
    next();
})

// Retorna os Users
router.get("/view/all", async (req, res) => {
    await UserModel.find({})
        .then((users) =>{ 
            res.status(200).json(users)
        })
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

// Retorna o User com Id especifico
router.get("/view/id/:id", async (req, res) => {
    const id = req.params.id
    await UserModel.findById(id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

// Retorna o User com email especifico
router.get("/view/email/:email", async (req, res) => {
    const email = req.params.email
    await UserModel.find({email: email})
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

// Adiciona User
router.post("/save", async (req, res) => {
    const user = req.body;
    
    const userIsInDB = (await UserModel.find({email: user.email})).length != 0;

    if (userIsInDB) {
        return res.send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>Usuário já cadastrado!</p>`)
    }

    await UserModel.create(user)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
});

// Deleta usuário com email especificado
router.delete("/del/email/:email", async (req, res) => {
    const email = req.params.email;

    await UserModel.findOneAndDelete({email: email})
        .then(_ => res.redirect('/users/view/all'))
        .catch( err => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
})

module.exports = router