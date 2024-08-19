const orderController = require("../controllers/order.controller")


const router = require("express").Router()

router

    .post("/place-order", orderController.placeOrder)

module.exports = router