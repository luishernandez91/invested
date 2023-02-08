const {Schema, model} = require('mongoose');

const paymentSchema = Schema({
  credit_id: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = model('Payment', paymentSchema);
