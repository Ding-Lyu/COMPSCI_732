const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WishListSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    movieId: { type: mongoose.Types.ObjectId, ref: "Movie", required: true },
    poster: { type: String, require: true },
    title: { type: String, require: true },
    type: { type: String, require: true },
    year: { type: String, require: true },
    imdbID: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorite", WishListSchema);
