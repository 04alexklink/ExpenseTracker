const Transaction = require('../models/Transaction')

async function getTransactions (req, res, next) {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions,
    })
  } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Server error!'
      })
  }
}

async function addTransaction (req, res, next) {
  try {
    const text = req.body.text
    const amount = req.body.amount
    const newTransaction = await Transaction.create(req.body)
    return res.status(201).json({
        success: true,
        data: newTransaction
    })
  }
  catch (err) {
   console.log(err, "ERROR")
  }
}

function deleteTransaction(id) {
    return 'Delete a transaction'
}

module.exports = { 
    getTransactions, 
    addTransaction }