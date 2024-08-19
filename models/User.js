const mongooses = require("mongoose")

const userSchma = new mongooses.Schema({
    name: {
        type: String,
        required: true
    },
    cname: {
        type: String,
        // required: true
    },
    owner: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        inum: ["user", "admin", "seller"],

    },
})

module.exports = mongooses.model("user", userSchma)