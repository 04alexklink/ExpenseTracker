import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'
//initial state

const initialState = {
    transactions: [],
    errors: null,
    loading: true
}

//create context
export const GlobalContext = createContext(initialState);
// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions

async function getTransactions() {
  try {
    const res = await axios.get('http://localhost:5000')
    dispatch({
      type: 'GET_TRANSACTIONS',
      payload: res.data.data
    })
  } catch (err) {
    console.log(err, "ERRORRRR")
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err
    })
  }
}

function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
      transactions: state.transactions,
      errors: state.errors,
      loading: state.loading,
      deleteTransaction,
      addTransaction,
      getTransactions
  }}>
  {children}
  </GlobalContext.Provider>)
}