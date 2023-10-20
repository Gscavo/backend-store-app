const express = require("express");
const UserModel = require("../../../models/user.model");

const router = express.Router();

// Adiciona User
router.post("", async (req, res) => {
    const user = req.body;
    
    const userIsInDB = (await UserModel.find({email: user.email})).length != 0;

    if (userIsInDB) {
        return res.send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>Usuário já cadastrado!</p>`)
    }

    await UserModel.create(user)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`));
});

router.post("/devTeste", async (req, res) => {
    const users = req.body;

    try {
        await users.forEach(async (user) => {
            await UserModel.create(user);
        })
    } catch(err) {
        res.status(400).send("<h1>Ocorreu um erro na requisição!</h1>"+`<p>${err.message}</p>`)
    } finally {
        res.redirect("/users/get/")
    }
})

module.exports = router;