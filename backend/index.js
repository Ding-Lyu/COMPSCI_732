const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
// routes
const userRouter = require("./router/user.routes");
const favoriteRouters = require("./router/favorite.routes");

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@dinglyu.nw1fm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const app = express();
app.use(express.static(path.join(__dirname, "public", "build")));


app.use(cors());

// body parsing
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(userRouter);
app.use("/favorite", favoriteRouters);

app.use("/*", (req, res, next) => {
  res
  .status(200)
  .sendFile(path.join(__dirname, "public", "build", "index.html"));
});

app.use((err, req, res, next) => {
  const message = err.message || "Server Error",
    status = err.status || 500;

  console.log(`Status: ${status} \nMessage: ${message}`);
  console.log(`URL: ${req.url} METHOD: ${req.method}`);
  return res.status(err.status || 500).json({
    message,
    errors: err.errors,
    status,
  });
});

mongoose.connect(
  CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      app.listen(PORT);
      console.log(`Server is running on port ${PORT}`);
    }
  }
);
