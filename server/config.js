const mongoose = require('mongoose');
async function dbConnection() {
  try {
    //await mongoose.connect('mongodb+srv://luis-invested:2cLfyZC8KoicNO2t@cluster0.lpesxrr.mongodb.net/invested');
    await mongoose.connect(`${process.env.DB_HOST}${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER}/invested`);
    console.log('DB connected')
  } catch (e) {
    console.log(e);
    throw new Error('Connection db failure');
  }

}

module.exports = {dbConnection};
