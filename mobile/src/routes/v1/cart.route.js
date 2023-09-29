const express =require("express");
const {cartValidation}=require("../../validations");
const {cartController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-cart",
    cartController.createCart
)

router.get(
    "/list",
    cartController.getCartlist
)

router.get(
    "/get-details/:cartId",
    cartController.getCartDetails
  );

  router.put(
    "/update-details/:cartId",
    cartController.updateDetails
  );

router.delete(
    "/delete-cart/:cartId",
    cartController.deleteCartById,
)

module.exports=router;