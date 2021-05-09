const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    poster: { type: String, require: true },
    title: { type: String, require: true },
    type: { type: String, require: true },
    year: { type: String, require: true },
    imdbID: { type: String, require: true },
    comments: [
      {
        body: String,
        userId: {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
        username: { type: String, require: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
