const asyncHandler = require("express-async-handler")
const Order = require("../models/Order")
const User = require("../models/User")

exports.placeOrder = asyncHandler(async (req, res) => {
    await Order.create(req.body)
    res.status(200).json({ message: "Place order success" })
})

exports.getAllorder = asyncHandler(async (req, res) => {
    const result = await Order.find()
    res.status(200).json({ message: "all order Fetch succes", result })
})
exports.getUserAllOrder = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await Order.find({ user: id }).populate("products")
    res.status(200).json({ message: "all order Fetch succes", result })
})

exports.cancleOrder = asyncHandler(async (req, res) => {
    const { id } = req.params
    console.log(id);

    await Order.findByIdAndUpdate(id, {status:"canceled"})
    res.status(200).json({ message: "order Cancle success" })
})

