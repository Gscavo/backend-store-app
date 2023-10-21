const express = require("express");
const itemModel = require("../../../models/item.model")
const errorLog = require("../../../modules/error")

const router = express.Router();

router.delete('/id/:id', async (req, res) => {
    const id = req.params.id;

    await itemModel.findOneAndRemove({id: id})
        .then(item => res.redirect("/items/get/"))
        .catch(err => errorLog(res, err));
})

router.delete('/name/:name', async (req, res) => {
    const name = req.params.name;

    await itemModel.findOneAndRemove({name: name})
        .then(item => res.redirect("/items/get/"))
        .catch(err => errorLog(res, err));
})

router.delete('/drop', async (req, res) => {
    await itemModel.deleteMany({})
        .then(item => res.redirect("/items/get/"))
        .catch(err => errorLog(res, err));
})

module.exports = router