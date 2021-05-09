const express = require("express");
const MovieController = require("../controller/movie.ctrl");
const authMiddleware = require("../middleware/authMiddleware");

const movieRouters = express.Router();

movieRouters.get("/", MovieController.index);
movieRouters.get("/:movieId/comment", MovieController.commentsByMovieId);
movieRouters.post("/comment", authMiddleware, MovieController.storeComment);

module.exports = movieRouters;
