const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      default: null,
    },
    mobile: {
      type: String,
      required: true,
      default: null,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      default: null,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      required: false,
    },
    dob: {
      type: String,
      required: false,
      default: null,
    },
    address: {
      type: String,
      require: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
