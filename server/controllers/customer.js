const {response} = require('express');
const Customer = require('../models/customer');
const Credit = require('../models/credit');
const getCustomers = async (req, res) => {
  const customers = await Customer.find({}, 'name lastname phone email');
  res.json(customers);
};

const postCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();

    const credit = new Credit({
      customer_id: customer.id,
      amount: req?.body.amount
    });

    await credit.save();

    res.json({created: true, customer});
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e
    });
  }
};

const putCustomer = async (req, res = response) => {
  const uid = req.params.id;
  try {
    const user = await Customer.findById(uid);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    const updated = await Customer.findByIdAndUpdate(uid, req.body);
    return res.status(201).json({
      message: 'User updated',
      updated
    });
  } catch (e) {
    console.log(e);
  }
}

const deleteCustomer = async (req, res = response) => {
  try {
    const uid = req.params.id;
    const customer = await Customer.findById(uid);

    if (!customer) {
      res.status(404).json({
        message: 'Customer not found'
      });
    }

    await Customer.findByIdAndDelete(uid);

    res.status(200).json({
      message: 'User deleted'
    });
  } catch (e) {
    console.log(e);
  }

}

module.exports = {getCustomers, postCustomer, putCustomer, deleteCustomer}
