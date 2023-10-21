const express = require("express");
const ItemModel = require("../../../models/item.model");
const errorLog = require("../../../modules/error")

const router = express.Router();

router.post('/', async (req, res) => {
    const item = req.body;

    await ItemModel.create(item)
        .then(_ => res.redirect("/items/"))
        .catch(err => errorLog(res, err));
})

router.post('/devTeste', async (req, res) => {
    const items = req.body;
    try {
        await items.forEach(async item => {
            await ItemModel.create(item);
        });
        res.redirect("/items/")
    } catch(err) {
        errorLog(res, err)
    }
})

module.exports = router