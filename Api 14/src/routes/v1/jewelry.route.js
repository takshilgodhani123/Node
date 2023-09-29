const express = require("express");
const {jewelryValidation}=require("../../validations");
const {jewelryController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-jewelry",
    jewelryController.createJewelry
)

router.get(
    "/list",
    jewelryController.getJewelryList
)

router.get(
    "/get-details/:jewelryId",
    jewelryController.getJewelryDetails
  );
  
  router.put(
    "/update-details/:jewelryId",
    jewelryController.updateDetails
  );

router.delete(
    "/delete-jewelry/:jewelryId",
    jewelryController.deleteJewelryById,
)

module.exports=router;