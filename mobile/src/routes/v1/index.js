const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute=require("./product.route")
const bookRoute = require("./book.route");
const mobileRoute=require("./mobile.route");
const orderRoute=require("./order.route");
const cartRoute=require("./cart.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute)
router.use("/book", bookRoute);
router.use("/mobile", mobileRoute);
router.use("order",orderRoute);
router.use("/cart", cartRoute);

module.exports = router;