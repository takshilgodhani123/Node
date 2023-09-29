const express = require("express");
const {pharmacyValidation}=require("../../validations");
const {pharmacyController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-pharmacy",
    pharmacyController.createPharmacy
)

router.get(
    "/list",
    pharmacyController.getPharmacylist
)

router.get(
    "/get-details/:pharmacyId",
    pharmacyController.getPharmacyDetails
  );
  
  router.put(
    "/update-details/:pharmacyId",
    pharmacyController.updateDetails
  );

router.delete(
    "/delete-pharmacy/:pharmacyId",
    pharmacyController.deletePharmacyById,
)

module.exports=router;