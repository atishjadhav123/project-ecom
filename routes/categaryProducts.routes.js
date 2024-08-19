const categaryController = require("../controllers/category.controller")

const router = require("express").Router()

router

    .get("/", categaryController.CategaryAllproducts)
    .post("/categary-add-products", categaryController.CategaryAddProducts)
    .put("/categary-update-products/:Id", categaryController.categaryUpdateProducts)
    .delete("/categary-delete-products/:Id", categaryController.categaryDeleteProducts)

module.exports = router