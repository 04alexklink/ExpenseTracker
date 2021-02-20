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
   if(err.name === 'ValidationError') {
     const messages = Object.values(err.errors).map(val => val.message)
     return res.status(400).json({
       success: false,
       error: messages
     })
   }
   else {
    res.status(500).json({
      success: false,
      error: err
    })
    
  }}
}

async function deleteTransaction(req, res, next) {
  try{
//   const id = req.params.id
//   const deleted = await Transaction.deleteOne({ _id: id })
  const transaction = await Transaction.findById(req.params.id)
  if(!transaction) {
    return res.status(404).json({error: "Message not found in database"})
  }
  await transaction.remove()
  return res.status(200).json({
      success: true,
      data: {}
  });
  } catch (err) {
    return res.status(500).json({
     success: false,
     error: 'Server Error'
    })
  }
}

module.exports = { 
    getTransactions, 
    addTransaction,
    deleteTransaction
}