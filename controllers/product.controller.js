const asyncHandler = require("express-async-handler")
const Products = require("../models/Products")
const { uploads } = require("../utils/Upload")
const fs = require("fs")
const path = require("path")

exports.getAllproducts = asyncHandler(async (req, res) => {
    const result = await Products.find().populate("sellerId")
    res.status(200).json({ message: "blog fetch success", result })
})
exports.productsdetails = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await Products.findById(id)
    // .populate("")
    res.status(200).json({ message: "blog fetch success", result })
})
exports.addProducts = asyncHandler(async (req, res) => {
    uploads(req, res, async err => {
        if (err) {
            return res.status(400).json({ message: "unable to upload image" })
        }

        await Products.create({ ...req.body, hero: req.file.filename })
        res.status(201).json({ message: "blog create success" })
    })
})
exports.updateProducts = asyncHandler(async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            return res.status(400).json({ message: "unable to upload image" })
        }
        const { blogId } = req.params
        if (req.body.remove) {
            console.log(req.body.remove);
            fs.unlinkSync(path.join(__dirname, "..", "uploads", req.body.remove))
            console.log(req.file.filename)
            await Blog.findByIdAndUpdate(blogId, ({ ...req.body, hero: req.file.filename }))
            res.status(200).json({ message: "blog update sucess" })
        } else {
            console.log(req.body.remove);
            console.log(req.file.filename);
            await Blog.findByIdAndUpdate(blogId, req.body)
            res.status(200).json({ message: "blog update success" })
        }
    })
})
exports.deleteProducts = asyncHandler(async (req, res) => {
    const { blogId } = req.params
    const result = await Blog.findById(blogId)
    fs.unlinkSync(path.join(__dirname, "..", "uploads", result.hero))
    await Blog.findByIdAndDelete(blogId)
    res.status(200).json({ message: "blog delete success" })
})