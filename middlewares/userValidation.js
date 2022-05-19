const jwt = require("jsonwebtoken");
const { createError } = require("../../helpers");
const { SECRET_KEY } = process.env;
// const bcrypt = require("bcryptjs");

const userValidation = (req, res, next) => {
  next();
};

module.exports = {
  userValidation,
};
