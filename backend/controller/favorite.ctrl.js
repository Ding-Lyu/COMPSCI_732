const { validationResult } = require("express-validator");
const Favorite = require("../model/Favorite");

exports.index = async (req, res, next) => {
  try {
    const movies = await Favorite.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      status: 200,
      message: "Get all favorite movies successfully!",
      data: { movies },
    });
  } catch (error) {
    return next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      err.errors = validatedData.errors.map((error) => ({
        message: error.msg,
        name: error.param,
      }));
      throw err;
    }

    const reqBody = req.body;

    const favoriteItem = await Favorite.create({
      userId: req.userId,
      poster: reqBody.poster,
      title: reqBody.title,
      type: reqBody.type,
      year: reqBody.year,
      imdbID: reqBody.imdbID,
    });

    return res.status(200).json({
      status: 200,
      message: "Movie added into your watch-list successfully!",
      data: { favoriteItem },
    });
  } catch (error) {
    return next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const isAuthorize = await Favorite.findByIdAndDelete(
      req.params.favoriteId
    ).where("userId", req.userId);

    if (!isAuthorize) {
      const err = new Error("Action Forbidden.");
      err.status = 403;
      throw err;
    }

    return res.status(200).json({
      status: 200,
      message: "Movie deleted successfully from your watch list!",
    });
  } catch (error) {
    return next(error);
  }
};
