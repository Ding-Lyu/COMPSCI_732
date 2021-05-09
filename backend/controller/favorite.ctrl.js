const Favorite = require("../model/Favorite");

exports.getMovieList = async (req, res, next) => {
  try {
    const favorites = await Favorite.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      status: 200,
      message: "Get all favorite movies successfully!",
      data: {
        movies: favorites.map((fav) => ({
          ...fav._doc,
          _id: fav.movieId,
          favId: fav._id,
          Title: fav.title,
          Year: fav.year,
          imdbID: fav.imdbID,
          Type: fav.type,
          Poster: fav.poster,
        })),
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    const reqBody = req.body;

    const favoriteItem = await Favorite.create({
      userId: req.userId,
      poster: reqBody.poster,
      title: reqBody.title,
      type: reqBody.type,
      year: reqBody.year,
      imdbID: reqBody.imdbID,
      movieId: reqBody.movieId,
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
    // console.log(req.params.favoriteId, req.userId);
    const isAuthorize = await Favorite.findOneAndDelete({
      userId: req.userId,
      movieId: req.params.movieId,
    });

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
