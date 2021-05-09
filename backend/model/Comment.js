const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    body: String,
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    movieId: {
      type: mongoose.Types.ObjectId,
      ref: "Movie",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
