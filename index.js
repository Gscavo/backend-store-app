const {app, port} = require("./src//modules/express")

const dotenv = require("dotenv");

dotenv.config()

require("./src/database/connect")

app.listen(port, '0.0.0.0', _ => {
    console.log("Servidor Online")
})