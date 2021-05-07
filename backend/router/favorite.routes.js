const express = require("express");
const { body, param } = require("express-validator");
const FavoriteController = require("../controller/favorite.ctrl");
const authMiddleware = require("../middleware/authMiddleware");

const favoriteRouters = express.Router();

favoriteRouters.get("/", authMiddleware, FavoriteController.getMovieList);
favoriteRouters.post("/", authMiddleware, FavoriteController.store);
favoriteRouters.delete("/:movieId", authMiddleware, FavoriteController.destroy);

module.exports = favoriteRouters;
