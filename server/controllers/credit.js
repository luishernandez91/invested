const {response} = require('express');
const Credit = require('../models/credit');
const getCredits = async (req, res) => {
  const customers = await Credit.find({}).populate('customer_id');
  res.json(customers);
};
const getCreditsByCustomer = async (req, res) => {
  try {
    const customer_id = req.params.customer_id;
    const credits = await Credit.find({customer_id});
    res.json(credits);
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e
    });
  }
};

const postCredit = async (req, res) => {
  try {
    const credit = new Credit(req.body);
    await credit.save();
    res.json({created: true, credit});
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e
    });
  }
};

const putCredit = async (req, res = response) => {
  const id = req.params.id;
  try {
    const credit = await Credit.findById(id);

    if (!credit) {
      return res.status(404).json({
        message: 'Credit not found'
      });
    }

    const updated = await Credit.findByIdAndUpdate(id, req.body);
    return res.status(201).json({
      message: 'Credit updated',
      updated
    });
  } catch (e) {
    console.log(e);
  }
}

const deleteCredit = async (req, res = response) => {
  try {
    const id = req.params.id;
    const credit = await Credit.findById(id);

    if (!credit) {
      res.status(404).json({
        message: 'Credit not found'
      });
    }

    await Credit.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Credit deleted'
    });
  } catch (e) {
    console.log(e);
  }

}

module.exports = {getCredits, getCreditsByCustomer, postCredit, putCredit, deleteCredit}
