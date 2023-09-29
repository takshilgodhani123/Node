const express = require("express");
const {travelValidation}=require("../../validations");
const {travelController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-travel",
    travelController.createTravel
)

router.get(
    "/list",
    travelController.getTravellist
)

router.get(
  "/get-details/:travelId",
  travelController.getTravelDetails
);

router.put(
  "/update-details/:travelId",
  travelController.updateDetails
);


router.delete(
    "/delete-travel/:travelId",
    travelController.deleteTravelById,
)

module.exports=router;