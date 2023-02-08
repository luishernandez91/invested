const {response} = require('express');
const User = require('../models/user');
const {getToken} = require("../helpers/jwt");
const login = async (req, res = response) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});

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
