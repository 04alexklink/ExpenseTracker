import Transaction from './Transaction'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionsList = () => {
  const {transactions, getTransactions } = useContext(GlobalContext);
   
  useEffect(() => {
    getTransactions()
  }, [])
  
    return (
        <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction) => 
            (<Transaction key={transaction.id} transaction={transaction}/>)
          )}
        </ul>
        </>
    )
}

export default TransactionsList