const express = require("express");
const {musicValidation}=require("../../validations");
const {musicController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-music",
    musicController.createMusic
)

router.get(
    "/list",
    musicController.getMusicList
)

router.get(
    "/get-details/:musicId",
    musicController.getMusicDetails
  );
  
  router.put(
    "/update-details/:musicId",
    musicController.updateDetails
  );
  
router.delete(
    "/delete-music/:musicId",
    musicController.deleteMusicById,
)

module.exports=router;