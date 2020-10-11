const express = require("express");
const router = express.Router();

const userService = require("../services/user.service");

router.post("/signup", async (req, res, next) => {
  // extract email and password
  const { email, password, fullName, username, nic, mobile } = req.body;

  try {
    // sign up user
    const user = await userService.signup(
      email,
      password,
      fullName,
      username,
      nic,
      mobile
    );
    if (user) {
      return res.json({ status: true });
    }
    return res.json({ status: false });
  } catch (error) {
    console.error(error);
    res.json({ error: "Failed to signup user" });
  }
});

router.post("/login", async (req, res, next) => {
  // extract email and password
  const { username, password } = req.body;

  try {
    // check if credentials are valid
    const loginCorrect = await userService.login(username, password);
    if (loginCorrect) {
      const token = userService.generateToken(username);
      return res.json({ isAuth: true, token });
    }
    return res.json({ isAuth: false });
  } catch (error) {
    console.error(error);
    res.json({ error: "Failed to get has admin" });
  }
});

module.exports = router;
