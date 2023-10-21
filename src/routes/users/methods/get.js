const express = require("express");
const userModel = require("../../../models/user.model");
const errorLog = require("../../../modules/error")

const router = express.Router();

// Retorna os Users
router.get("/", async (req, res) => {
    await userModel.find({})
        .then((users) =>{ 
            res.status(200).json(users)
        })
        .catch((err) => errorLog(res, err))
})

// Retorna o User com Id especifico
router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    await userModel.findById(id)
        .then((user) => res.status(200).json(user))
        .catch((err) => errorLog(res, err));
})

// Retorna o User com email especifico
router.get("/email/:email", async (req, res) => {
    const email = req.params.email
    await userModel.find({email: email})
        .then((user) => res.status(200).json(user))
        .catch((err) => errorLog(res, err));
})

// Retorna o User com username especifico
router.get("/username/:username", async (req, res) => {
    const username = req.params.username;

    await userModel.find({username: username})
        .then((user) => res.status(200).json(user))
        .catch((err) => errorLog(res, err));
})

module.exports = router;