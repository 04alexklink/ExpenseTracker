function getTransactions() {
    return 'GET TRANSACTIONS FROM MODEL'
}

function addTransaction(transaction) {
  return 'Add a transaction'
}

function deleteTransaction(id) {
    return 'Delete a transaction'
}

module.exports = { 
    getTransactions,
    addTransaction,
    deleteTransaction }