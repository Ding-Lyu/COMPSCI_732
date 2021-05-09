const express = require("express");
const { body } = require("express-validator");
const UserController = require("../controller/user.ctrl");

const userRouters = express.Router();

const loginValidation = [
  body("email").isEmail().trim().notEmpty().withMessage("Invalid Email!"),
  body("password")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Invalid Password!"),
];
const signupValidation = [
  body("name")
    .bail()
    .isString()
    .isLength({ min: 2, max: 20 })
    .trim()
    .notEmpty()
    .withMessage("Name should be characters only!"),
  body("email")
    .bail()
    .isEmail()
    .trim()
    .notEmpty()
    .withMessage("Invalid Email!"),
  body("dob")
    .bail()
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Invalid date of birth!"),
  body("gender")
    .bail()
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Invalid gender!"),
  body("address")
    .bail()
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Invalid address!"),
  body("mobile")
    .bail()
    .isMobilePhone()
    .trim()
    .notEmpty()
    .withMessage("Invalid mobile no."),
  body("password")
    .custom((value) => {
      const regex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,13}$/;
      return regex.test(value);
    })
    .withMessage(
      "Password should contain at least one uppercase, one number, and one special character!"
    ),
  body("confirmPassword")
    .custom((value, { req }) => (value !== req.body.password ? false : true))
    .withMessage("Password does not match!"),
];

userRouters.post("/login", loginValidation, UserController.login);
userRouters.post("/signup", signupValidation, UserController.signup);

module.exports = userRouters;
