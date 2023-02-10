const {response} = require('express');
const Payment = require('../models/payment');
const getPayments = async (req, res) => {
  const customers = await Payment.find({});
  res.json(customers);
};

const getPaymentByCustomer = async (req, res) => {
  try {
    const customer_id = req.params.customer_id;
    const payments = await Payment.find({customer_id});
    res.json(payments);
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e
    });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findById(id);
    res.json(payment);
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e
    });
  }
};

const getPaymentsByCredit = async (req, res) => {
  try {
    const credit_id = req.params.credit_id;
    const payments = await Payment.find({credit_id});
    res.json(payments);
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e
    });
  }
};

const postPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.json(payment);
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e
    });
  }
};

const putPayment = async (req, res = response) => {
  const id = req.params.id;
  try {
    const payment = await Payment.findById(id);

    if (!payment) {
      return res.status(404).json({
        message: 'Payment not found'
      });
    }

    const updated = await Payment.findByIdAndUpdate(id, req.body);
    return res.status(201).json({
      message: 'Payment updated',
      updated
    });
  } catch (e) {
    console.log(e);
  }
}

const deletePayment = async (req, res = response) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findById(id);

    if (!payment) {
      res.status(404).json({
        message: 'Payment not found'
      });
    }

    await Payment.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Payment deleted'
    });
  } catch (e) {
    console.log(e);
  }

}

module.exports = {
  getPayments,
  getPaymentById,
  getPaymentByCustomer,
  getPaymentsByCredit,
  postPayment,
  putPayment,
  deletePayment
}
