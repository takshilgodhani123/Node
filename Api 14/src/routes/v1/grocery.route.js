const express = require("express");
const {groceryValidation}=require("../../validations");
const {groceryController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-grocery",
    groceryController.createGrocery
)

router.get(
    "/list",
    groceryController.getGroceryList
)

router.get(
    "/get-details/:groceryId",
    groceryController.getGroceryDetails
  );
  
  router.put(
    "/update-details/:groceryId",
    groceryController.updateDetails
  );

router.delete(
    "/delete-grocery/:groceryId",
    groceryController.deleteGroceryById,
)

module.exports=router;