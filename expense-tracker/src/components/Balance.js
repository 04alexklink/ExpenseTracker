import { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const calculatedBalance = (transactions) => {
    var balance = 0;
    transactions.forEach((transaction) => {
      balance += transaction.amount
    })
    return balance.toFixed(2)
  }
  

    return (
        <>
        <h4>Your Balance:</h4>
        <h1>£{calculatedBalance(transactions)}</h1>
        </>
    )
}

export default Balance;