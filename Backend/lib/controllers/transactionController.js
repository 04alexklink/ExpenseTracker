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
      return res.send(500).json({
        success: false,
        error: 'Server error!'
      })
  }
}

function addTransaction(transaction) {
  return 'Add a transaction'
}

function deleteTransaction(id) {
    return 'Delete a transaction'
}

module.exports = { 
    getTransactions }