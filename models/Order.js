const mongoose = require("mongoose")

const OrderSchma = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    products: {
        type: [mongoose.Types.ObjectId],
        ref: "product",

    },
    status: { type: String, enum: ["placed", "canceled", "delivered"], default: "placed" },
})

module.exports = mongoose.model("order", OrderSchma)