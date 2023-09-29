const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create book */
router.post(
  "/create-book",
  // validate(bookValidation.createBook),
  bookController.createBook
);

/** Get book list */
router.get(
  "/list",
  // validate(bookValidation.getbookList),
  bookController.getBookList
);

router.get(
  "/get-details/:bookId",
  // validate(bookValidation.getDetails),
  bookController.getBookDetails
);

router.put(
  "/update-details/:bookId",
  // validate(bookValidation.updateDetails),
  bookController.updateDetails
);

/** Delete book */
router.delete(
  "/delete-book/:bookId",
  // validate(categoryValidation.getDetails),
  bookController.deleteBook
);
module.exports = router;