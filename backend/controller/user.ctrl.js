const { validationResult } = require("express-validator");
const bcypt = require("bcryptjs");
const { generateJWTToken } = require("../helper/jwt");
const User = require("../model/User");

exports.signup = async (req, res, next) => {
  try {
    const validatedData = validationResult(req);
    if (!validatedData.isEmpty()) {
      const err = new Error("Validation Fail");
      err.status = 422;
      const _error = {};
      validatedData.errors.map((error) => {_error[error.param] = error.msg});
      err.errors = _error;
      throw err;
    }

    const reqBody = req.body;

    const isMobileExist = await User.exists({ mobile: reqBody.mobile });
    const isEmailExist = await User.exists({ email: reqBody.email });

    if (isMobileExist) {
      const err = new Error("Mobile no is already used!");
      err.status = 422;
      throw err;
    }

    if (isEmailExist) {
      const err = new Error("Email is already used!");
      err.status = 422;
      throw err;
    }

    const hashedPassword = await bcypt.hash(reqBody.password, 12);

    const user = await User.create({
      name: reqBody.name,
      mobile: reqBody.mobile,
      email: reqBody.email,
      dob: reqBody.dob,
      gender: reqBody.gender,
      address: reqBody.address,
      password: hashedPassword,
    });
    // generate token
    const payload = {
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      dob: user.dob,
      gender: user.gender,
      address: user.address,
      _id: user._id,
    };
    const token = generateJWTToken(payload);

    res.status(200).json({
      status: 200,
      message: "User registered successfully!",
      data: {
        user: {
          ...user._doc,
          password: null,
        },
        token,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.login = async (req, res, next) => {
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
    const user = await User.findOne({ email: reqBody.email });

    if (!user) {
      const err = new Error("Oops, you are now registered yet!");
      err.status = 404;
      throw err;
    }

    const isEqual = await bcypt.compare(reqBody.password, user.password);
    if (!isEqual) {
      const err = new Error("Password does not match!");
      err.code = 422;
      throw err;
    }

    // generate token
    const payload = {
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      dob: user.dob,
      gender: user.gender,
      address: user.address,
      _id: user._id,
    };

    const token = generateJWTToken(payload);

    return res.status(200).json({
      status: 200,
      message: "User logged in successfully!",
      data: { token, user },
    });
  } catch (error) {
    return next(error);
  }
};
