const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const result = await User.findOne({ email })
    if (result) {
        return res.status(400).json({ message: "email Alerady Register " })
    }
    const hashPass = await bcrypt.hash(password, 10)
    await User.create({ ...req.body, password: hashPass })
    res.status(200).json({ message: "user Register sccess" })
})
// exports.loginuser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body
//     const result = await User.findOne({ email })
//     if (!result) {
//         return res.status(400).json({ message: "Email not found" })
//     }
//     const verify = await bcrypt.compare(password, result.password)
//     if (!verify) {
//         return res.status(400).json({ message: "password did'nt match" })
//     }
//     const token = await jwt.sign({ userId: result._id }, process.env.PORT, { expiresIn: "2h" })
//     res.cookie("auth", token, { maxAge: 60 * 60 * 15 })
//     res.status(200).json({ message: "User Register sucess", result })
// })

// exports.loginuser = asyncHandler(async (req, res) => {

//     const { email, password } = req.body
//     // email validation cheack
//     const result = await User.findOne({ email })
//     if (!result) {
//         return res.status(401).json({ message: "invalid email" })
//     }
//     // password validation cheack
//     const verify = await bcrypt.compare(password, result.password)
//     if (!verify) {
//         return res.status(401).json({ message: "invalid password" })
//     }

//     //login
//     //TOKEN
//     const token = jwt.sign({ userID: result._id }, process.env.JWT_KEY, { expiresIn: "1h" })

//     // send via cookie
//     res.cookie("auth", token, { maxAge: 60 * 60 * 15 })
//     res.status(200).json({
//         message: "user login success",
//         result: { name: result.name, _id: result._id }
//     })
// })




exports.getAlluser = asyncHandler(async (req, res) => {
    const result = await User.find()
    res.status(200).json({ message: "all user fetch success", result })
})


exports.registerUser = async (req, res) => {
    try {
        const { password } = req.body
        const hashPass = await bcrypt.hash(password, 10)
        // console.log(hashPass);
        await User.create({ ...req.body, password: hashPass, role: "user" })
        res.status(201).json({ message: "user Register success" })
    } catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}
exports.registerSeller = async (req, res) => {
    try {
        const { password } = req.body
        const hashPass = await bcrypt.hash(password, 10)
        // console.log(hashPass);
        await User.create({ ...req.body, password: hashPass, role: "seller" })
        res.status(201).json({ message: "user Register success" })
    } catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

exports.loginuser = async (req, res) => {
    try {
        const { email, password } = req.body
        // email validation cheack
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(401).json({ message: "invalid email" })
        }
        // password validation cheack
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(401).json({ message: "invalid password" })
        }

        //login
        //TOKEN
        const token = jwt.sign({ userID: result._id }, process.env.JWT_KEY, { expiresIn: "1h" })

        // send via cookie
        res.cookie("auth", token, { maxAge: 60 * 60 * 15 })
        res.status(200).json({
            message: "user login success",
            result: { name: result.name, role: result.role, _id: result._id }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}
exports.loginSeller = async (req, res) => {
    try {
        const { email, password } = req.body
        // email validation cheack
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(401).json({ message: "invalid email" })
        }
        // password validation cheack
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(401).json({ message: "invalid password" })
        }

        //login
        //TOKEN
        const token = jwt.sign({ userID: result._id }, process.env.JWT_KEY, { expiresIn: "1h" })

        // send via cookie
        res.cookie("seller", token, { maxAge: 60 * 60 * 15 })
        res.status(200).json({
            message: "user login success",
            result: { name: result.name, role: result.role, _id: result._id }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

exports.logoutuser = asyncHandler(async (req, res) => {
    res.clearCookie("auth")
    res.status(200).json({ message: "user logout success" })
})

exports.getAlluser = asyncHandler(async (req, res) => {
    const result = await User.find({ role: "user" })
    res.status(200).json({ message: "all order Fetch succes", result })
})