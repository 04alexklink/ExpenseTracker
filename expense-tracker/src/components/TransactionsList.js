import Transaction from './Transaction'

const TransactionsList = () => {

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