// const userCOntroller = require("../controllers/auth.controller")

const userController = require("../controllers/user.controller")

const router = require("express").Router()

router

    .get("/", userController.getAllorder)
    .post("/place-order", userController.placeOrder)
    .get("/getuser-order/:id", userController.getUserAllOrder)
    .put("/cancle-order/:id", userController.cancleOrder)

module.exports = router