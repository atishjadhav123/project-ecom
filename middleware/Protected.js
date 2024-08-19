// const jwt = require("jsonwebtoken");
// const asyncHandler = require("express-async-handler");

// exports.userProtected = asyncHandler(async (req, res, next) => {
//     console.log("Middleware called");
//     console.log("Cookies:", req.cookies);

//     // Check if the 'auth' cookie exists
//     if (!req.cookies || !req.cookies.auth) {
//         return res.status(401).json({ message: "No Cookie Found" });
//     }

//     const token = req.cookies.auth;

//     try {
//         // Verify the 'auth' cookie
//         const decoded = jwt.verify(token, process.env.JWT_KEY);
//         console.log("JWT decoded:", decoded);
//         next();
//     } catch (err) {
//         // Handle verification errors
//         return res.status(401).json({ message: "JWT error: " + err.message });
//     }
// });

const jwt = require("jsonwebtoken")
exports.userProtected = async (req, res, next) => {
    try {
        console.log('Cookies:', req.cookies);
        if (!req.cookies.auth) {
            return res.status(401).json({ meassage: "no Cookie Found" })
        }
        jwt.verify(req.cookies.auth, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    meassage: "kuch toh gdbad hai daya"
                })
            }
            next()
        })
    } catch (error) {
        res.status(500).json({ meassage: error.meassage || "user Protected error" })
    }
}






