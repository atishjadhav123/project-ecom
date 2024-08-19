const mongoose = require("mongoose")

const categaryProductsSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    hero: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("Category", categaryProductsSchma)