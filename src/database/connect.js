const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@main.8os1dio.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Mongoose Conectado");
    } catch (error) {
        console.log("Ocorreu um erro");
        console.error(error, error.message);
    } finally {
        console.log(process.env.MONGODB_USERNAME, process.env.MONGODB_PASSWORD)
    }
}

module.exports = connect();
