import Transaction from './Transaction'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionsList = () => {
  const context = useContext(GlobalContext);
  console.log(context, "HEY")
    return (
        <>
        <h3>History</h3>
        <ul className="list">
            <li className="minus">
            Cash <span>-£400</span><button className="delete-btn">Delete</button>
            </li> 
            <li className="plus">
            Cash <span>+£300</span><button className="delete-btn">Delete</button>
            </li> 
        </ul>
        </>
    )
}

export default TransactionsList