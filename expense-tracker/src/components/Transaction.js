const Transaction = ( {transaction }) => {

    const amountWithoutPrecedingNegSign = (number) => {
        const NumberChars = number.toString().split("")
        NumberChars.shift()
        return NumberChars.join("")
    }
    
    return (
        <>
        {transaction.amount < 0 ?
            (<li className="minus" key={transaction.id}>
           {transaction.text} <span>-£{amountWithoutPrecedingNegSign(transaction.amount)}</span><button className="delete-btn">Delete</button>
            </li>)  :
            (<li className="plus" key={transaction.id}>
            {transaction.text} <span>+£{transaction.amount}</span><button className="delete-btn">Delete</button>
            </li> )} 
        </>
    )
}

export default Transaction;