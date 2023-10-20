const mongoose = require("mongoose");
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@main.8os1dio.mongodb.net/?retryWrites=true&w=majority`)
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Mongoose Conectado");
    }
}

module.exports = connect();
