const Comment = require("../model/Comment");
const Movie = require("../model/Movie");
const User = require("../model/User");

exports.index = async (req, res, next) => {
  try {
    const movies = await Movie.find().sort({
      createdAt: -1,
    });
    return res.status(200).json({
      data: {
        movies: movies.map((movie) => ({
          ...movie._doc,
          _id: movie._id,
          Title: movie.title,
          Year: movie.year,
          imdbID: movie.imdbID,
          Type: movie.type,
          Poster: movie.poster,
        })),
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.commentsByMovieId = async (req, res, next) => {
  try {
    const comments = await Comment.find({
      movieId: req.params.movieId,
    }).populate("userId");
    return res.status(200).json({
      status: 200,
      message: "Comments get successfully!",
      data: { comments },
    });
  } catch (error) {
    return next(error);
  }
};

exports.storeComment = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const comment = await Comment.create({
      body: req.body.comment,
      userId: req.userId,
      movieId: req.body.movieId,
    });

    return res.status(200).json({
      status: 200,
      message: "Comment added into your watch-list successfully!",
      data: {
        comment: {
          ...comment._doc,
          userId: user,
        },
      },
    });
  } catch (error) {
    return next(error);
  }
};
