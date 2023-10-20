const express = require("express");

const itemsRoute = require("../routes/items.route")
const usersRoute = require("../routes/users/main")

const app = express();

const port = 5353;

app.use(express.json())

app.use('/items', itemsRoute)
app.use('/users', usersRoute)

module.exports = {
    app,
    port
}