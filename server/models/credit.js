const {Schema, model} = require('mongoose');

const creditSchema = Schema({
  user_id: {
    type: Number,
    required: true
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
