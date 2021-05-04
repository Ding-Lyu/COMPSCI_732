const express = require("express");
const { body, param } = require("express-validator");
const FavoriteController = require("../controller/favorite.ctrl");
const authMiddleware = require("../middleware/authMiddleware");

const favoriteRouters = express.Router();

const storeValidation = [
  body("poster")
    .bail()
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Invalid movie poster!"),
  body("title")
    .bail()
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Invalid movie title!"),
  body("type")
    .bail()
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Invalid movie type!"),
  body("year")
    .bail()
    .isNumeric()
    .trim()
    .notEmpty()
    .withMessage("Invalid movie year!"),
  body("year")
    .bail()
    .isAlphanumeric()
    .trim()
    .notEmpty()
    .withMessage("Invalid IMDB ID!"),
];

const deleteValidation = [
  param("favoriteId")
    .isAlphanumeric()
    .notEmpty()
    .withMessage("Favorite ID required!"),
];

favoriteRouters.get("/", authMiddleware, FavoriteController.index);
favoriteRouters.post(
  "/",
  authMiddleware,
  storeValidation,
  FavoriteController.store
);
favoriteRouters.delete(
  "/:favoriteId",
  authMiddleware,
  deleteValidation,
  FavoriteController.destroy
);

module.exports = favoriteRouters;
