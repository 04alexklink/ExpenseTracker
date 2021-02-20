export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction._id !== 
        action.payload)
      }
    case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions, action.payload]
        }
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        errors: action.payload
      }
    default: 
    return state
  }
}