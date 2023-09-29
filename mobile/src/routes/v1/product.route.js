const express = require("express");
const {productValidation}=require("../../validations");
const {productController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-product",
    productController.createProduct
)

router.get(
    "/list",
    productController.getProductlist
)

router.get(
    "/get-details/:productId",
    productController.getProductDetails
  );

  router.put(
    "/update-details/:productId",
    productController.updateDetails
  );

router.delete(
    "/delete-product/:productId",
    productController.deleteProductById,
)

module.exports=router;