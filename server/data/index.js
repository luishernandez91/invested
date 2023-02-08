const customers = require('./customers.json');
const credits = require('./credits.json');
const payments = require('./payments.json');

module.exports = {
  getCustomers: customers,
  getCredits: credits,
  getPayments: payments
}
