const {response} = require('express');
const User = require('../models/user');
const {getToken} = require("../helpers/jwt");
const md5 = require('md5');

const login = async (req, res = response) => {
  try {
    const {email, password} = req.body;

    const hashedPassword = md5(password);

    const user = await User.findOne({email, password: hashedPassword});

    if (!user) {
      return res.status(404).json({
        message: 'Incorrect credentials'
      });
    }

    const token = await getToken(user.id);

    return res.status(200).json({
      message: 'Logged in',
      user,
      token
    });

  } catch (e) {
    res.status(500).json({
      message: 'An error has occurred',
      error: e
    });
  }
}

module.exports = {login}
