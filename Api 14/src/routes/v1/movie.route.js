const express = require("express");
const {movieValidation}=require("../../validations");
const {movieController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-movie",
    movieController.createMovie
)

router.get(
    "/list",
    movieController.getMovieList
)

router.get(
    "/get-details/:movieId",
    movieController.getMovieDetails
  );
  
  router.put(
    "/update-details/:movieId",
    movieController.updateDetails
  );

router.delete(
    "/delete-movie/:movieId",
    movieController.deleteMovieById,
)

module.exports=router;