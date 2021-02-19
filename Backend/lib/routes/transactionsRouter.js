const express = require('express');
const router = express.Router()
const {getTransactions} = require('../controllers/transactionController')


router.get('/', (req, res) => {
  res.send(getTransactions())
})

module.exports = router