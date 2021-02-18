import Transaction from './Transaction'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionsList = () => {
  const {transactions } = useContext(GlobalContext);

  const amountWithoutPrecedingNegSign = (number) => {
     const NumberChars = number.toString().split("")
     NumberChars.shift()
     return NumberChars.join("")
 }

    return (
        <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction) => {
            if(transaction.amount < 0) {
              return (
                <li className="minus" key={transaction.id}>
              {transaction.text} <span>-£{amountWithoutPrecedingNegSign(transaction.amount)}</span><button className="delete-btn">Delete</button>
                </li> 
                )
            } else { 
              return (
             <li className="plus" key={transaction.id}>
             {transaction.text} <span>+£{transaction.amount}</span><button className="delete-btn">Delete</button>
             </li> 
              )
            }
          }          
          )}
        </ul>
        </>
    )
}

export default TransactionsList