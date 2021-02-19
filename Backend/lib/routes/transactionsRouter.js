const express = require('express');
const router = express.Router()
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactionController')

router.get('/', getTransactions)
// router.route('/').get(getTransactions)

// router.post('/transaction', addTransaction)
router.route('/transaction').post(addTransaction)

router.delete('/transaction/:id', deleteTransaction)

module.exports = router