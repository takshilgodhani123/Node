const express=require("express");
const {mobileValidation}=require("../../validations");
const {mobileController}=require("../../controllers");

const router=express.Router()

router.post(
    "/create-mobile",
    mobileController.createMobile
)

router.get(
    "/list",
    mobileController.getMobilelist
)

router.get(
    "/get-Details",
    mobileController.getMobileDetails
)

router.put(
    "/update-details/:mobileId",
    mobileController.updateDetails
)

router.delete(
    "/delete-mobile/:mobileId",
    mobileController.deleteMobile,
)

module.exports=router;