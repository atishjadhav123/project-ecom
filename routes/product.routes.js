const productController = require("../controllers/product.controller")
const { userProtected } = require("../middleware/Protected")
const User = require("../models/User")

const router = require("express").Router()

router

    .get("/", productController.getAllproducts)
    .get("/details/:id", productController.productsdetails)
    .post("/add-products", productController.addProducts)
    .put("/update-products/:Id", productController.updateProducts)
    .delete("/delete-products/:Id", productController.deleteProducts)

module.exports = router