const {app, port} = require("./src//modules/express")

require("./src/database/connect")

app.listen(port, '0.0.0.0', _ => {
    console.log("Servidor Online")
})