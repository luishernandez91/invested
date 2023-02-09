const {Schema, model} = require('mongoose');

const paymentSchema = Schema({
  credit_id: {
    type: Schema.Types.ObjectId,
    ref: 'Credit'
  },
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
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
