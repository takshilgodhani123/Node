const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");

const router = express.Router();

/** create hotel */
router.post("/create-hotel", hotelController.createHotel);

/** hotel list */
router.get("/list", hotelController.getHotelslist);

router.get(
    "/get-details/:hotelId",
    hotelController.getHotelDetails
  );
  
  router.put(
    "/update-details/:hotelId",
    hotelController.updateDetails
  );

/** delete hotel */
router.delete("/delete-hotel/:hotelId", hotelController.deleteHotel);

module.exports = router;
