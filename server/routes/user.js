const {Router} = require('express');
const User = require('../models/user');
const router = Router();
const md5 = require('md5');
router.post('/', async function (req, res) {
  const {email, password} = req.body;
  const user = new User({email, password: md5(password)});
  await user.save();
  res.json({created: true, user});
});

module.exports = router;
