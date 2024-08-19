const contacController = require("../controllers/contact.controller")

const router = require("express").Router()


router
    .post("/contact", contacController.contactSubmit)

module.exports = router