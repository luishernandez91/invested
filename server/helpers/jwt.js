const jwt = require('jsonwebtoken');

const getToken = (id) => {
  return new Promise((resolve, reject) => {
    const payload = {id};
    jwt.sign(payload, process.env.SEED, {expiresIn: '2h'},
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve(token);

      });
  });

}
const validateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      message: 'No token found'
    });
  }

  try {
    const {id} = jwt.verify(token, process.env.SEED);
    req.id = id;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      message: 'Authentication error'
    });
  }
}

module.exports = {getToken, validateToken}
