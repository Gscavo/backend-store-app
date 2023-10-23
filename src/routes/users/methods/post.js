const express = require("express");
const userModel = require("../../../models/user.model");
const errorLog = require("../../../modules/error");

const router = express.Router();

// Adiciona User
router.post("/", async (req, res) => {
    const user = req.body;
    
    const userIsInDB = (await userModel.find({email: user.email})).length != 0;

    if (userIsInDB) {
        return errorLog(res, {message: "Usuário ja cadastrado!"})
    }

    await userModel.create(user)
        .then((user) => res.status(200).json(user))
        .catch((err) => errorLog(res, err))
});

router.post("/devTeste", async (req, res) => {
    const users = req.body;

    try {
        await users.forEach(async (user) => {
            await userModel.create(user);
        })
        res.redirect("/users/")
    } catch(err) {
        errorLog(res, err)
    }
})

module.exports = router;