const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

/**
 * This function will create a new user
 * with the given email and password
 * @param {string} email Email of the user
 * @param {string} password Password of the user
 */
const signup = async (email, password, fullName, username, nic, mobile) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    password: hashedPassword,
    fullName,
    username,
    nic,
    mobile,
  });
  return user;
};

/**
 * This function will check if the given
 * email and the password matches
 * @param {string} username Username of the user
 * @param {string} password Password of the user
 */
const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (user === null) {
    return false;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  return passwordMatch;
};

/**
 * This function will generate a JWT with the
 * given email
 * @param {string} username Email to hash
 */
const generateToken = (username) => {
  const token = jwt.sign(
    { username },
    config.jwt.secret,
    config.jwt.tokenOptions
  );
  return token;
};

module.exports = {
  login,
  signup,
  generateToken,
};
