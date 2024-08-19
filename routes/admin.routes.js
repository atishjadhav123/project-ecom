const adminController = require("../controllers/admin.controller")



const router = require("express").Router()

router

    .get("/get-allorder", adminController.getAllorder)
    .post("/orders/:orderId", adminController.cancelOrder)
    .get("/getallusers", adminController.getallUsers)
module.exports = router