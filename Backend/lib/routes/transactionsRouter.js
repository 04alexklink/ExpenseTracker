const express = require('express');
const router = express.Router()
const {getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactionController')


router.get('/', (req, res) => {
  res.send(getTransactions())
})

router.post('/transaction', (req, res) => {
  res.send(addTransaction())
})

router.delete('/transaction/:id', (req, res) => {
  res.send(deleteTransaction())
})

module.exports = router