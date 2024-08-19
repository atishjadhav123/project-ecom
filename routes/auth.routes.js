const authController = require("../controllers/auth.controller")
const { userProtected } = require("../middleware/Protected")

const router = require("express").Router()

router

    .get("/user", authController.getAlluser)
    .post("/register", authController.registerUser)
    .post("/register-seller", authController.registerSeller)
    .post("/login", authController.loginuser)
    .post("/logout", authController.logoutuser)
    .get("/get-all-user", authController.getAlluser)

module.exports = router