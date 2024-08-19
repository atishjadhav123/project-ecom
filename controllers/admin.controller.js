const asyncHandler = require("express-async-handler")
const Order = require("../models/Order");
const User = require("../models/User");

exports.getAllorder = asyncHandler(async (req, res) => {
    // const result = await Order.find().populate("products")

    const result = await Order.find()
        .populate({
            path: 'products',
            populate: { path: 'sellerId' }
        });

    res.status(200).json({ message: "all order Fetch succes", result })
})
exports.getallUsers = asyncHandler(async (req, res) => {
    // const result = await Order.find().populate("products")

    const result = await User.find({ role: "user" })


    res.status(200).json({ message: "all users Fetch succes", result })
})
exports.cancelOrder = asyncHandler(async (req, res) => {
    const { orderId } = req.params;

    if (!orderId) {
        return res.status(400).json({ message: "Order ID is required" });
    }

    const order = await Order.findById(orderId);

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    if (order.status === 'canceled') {
        return res.status(400).json({ message: "Order is already canceled" });
    }

    // Update the order status to 'canceled'
    order.status = 'canceled';

    await order.save();

    res.status(200).json({ message: "Order canceled successfully", order });
});
