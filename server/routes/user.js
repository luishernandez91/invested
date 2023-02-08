const {Router} = require('express');
const User = require('../models/user');
const router = Router();

router.post('/', async function (req, res) {
  const user = new User(req.body);
  await user.save();
  res.json({created: true, user});
});

module.exports = router;
