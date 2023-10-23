const express = require("express");
const ItemModel = require("../../../models/item.model");
const errorLog = require("../../../modules/error")
const router = express.Router();

router.get("/", async (req, res) => {
    await ItemModel.find({})
        .then(items => res.status(200).send(items))
        .catch(err => errorLog(res, err));
})

router.get("/id/:id", async (req, res) => {
    const id = req.params.id;
    
    await ItemModel.findById(id)
        .then(items => res.status(200).send(items))
        .catch(err => errorLog(res, err));
})

router.get("/name/:name", async (req, res) => {
    const name = req.params.name;

    await ItemModel.findOne({name: name})
        .then(items => res.status(200).send(items))
        .catch(err => errorLog(res, err));
})

module.exports = router