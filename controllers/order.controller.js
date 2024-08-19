
// const asyncHandler = require("express-async-handler")
// const Order = require("../models/Order")

// exports.placeOrder = asyncHandler(async (req, res) => {
//     await Order.create(req.body)
//     res.json({ message: "Order Placed Success" })
// })


// const asyncHandler = require("express-async-handler");
// const mongoose = require("mongoose");
// const Order = require("../models/Order");

// exports.placeOrder = asyncHandler(async (req, res) => {
//     const { products, user } = req.body;
//     const convertedProducts = products.map(id => mongoose.Types.ObjectId(id));
//     await Order.create({ products: convertedProducts, user });

//     res.json({ message: "Order Placed Success" });
// });


const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Order = require("../models/Order");

exports.placeOrder = asyncHandler(async (req, res) => {
    const { products, user } = req.body;

    // Convert product IDs to ObjectId using new keyword
    const convertedProducts = products.map(id => {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error(`Invalid product ID: ${id}`);
        }
        return new mongoose.Types.ObjectId(id);
    });

    // Create the order with converted product IDs
    await Order.create({ products: convertedProducts, user });

    res.json({ message: "Order Placed Successfully" });
});



