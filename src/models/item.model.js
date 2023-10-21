const mongoose = require("mongoose");

const itemSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    value: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('item', itemSchema);