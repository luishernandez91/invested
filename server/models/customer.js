const {Schema, model} = require('mongoose');

const customerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

customerSchema.method('toJSON', function () {
  const {__v, _id, ...object} = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('Customer', customerSchema);
