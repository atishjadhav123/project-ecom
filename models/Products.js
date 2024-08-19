const mongoose = require("mongoose")

const productSchma = new mongoose.Schema({
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
    category: {
        type: String,
        default: "hardware",
        enum: ["hardware", "cloth", "industrial", "eletroncis"],
        required: true
    },
    sellerId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    }


}, { timestamps: true })

module.exports = mongoose.model("product", productSchma)