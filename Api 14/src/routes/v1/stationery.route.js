const express = require("express");
const {stationeryValidation}=require("../../services");
const {stationeryController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-stationery",
    stationeryController.createStationery
)

router.get(
    "/list",
    stationeryController.getStationerylist
)

router.get(
    "/get-details/:stationeryId",
    stationeryController.getStationeryDetails
  );

  router.put(
    "/update-details/:stationeryId",
    stationeryController.updateDetails
  );

router.delete(
    "/delete-stationery/:stationeryId",
    stationeryController.deleteStationeryById,
)

module.exports=router;