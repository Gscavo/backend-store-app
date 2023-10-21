const express = require("express");

const itemsRoute = require("../routes/items/main")
const usersRoute = require("../routes/users/main")

const app = express();

const port = 8080;

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.use('/items', itemsRoute)
app.use('/users', usersRoute)

module.exports = {
    app,
    port
}