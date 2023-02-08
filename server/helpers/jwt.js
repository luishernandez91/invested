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

module.exports = {getToken}
