const {Schema, model} = require('mongoose');

const creditSchema = Schema({
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = model('Credit', creditSchema);
