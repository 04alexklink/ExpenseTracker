import { useState } from 'react';
const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
       <h3>Add new transaction</h3>
       <form>
         <div className="form-control">
         <label htmlFor="text">Text</label>
         <input type="text" value={text} onChange={onChange} placeholder="Enter Transaction Text..."></input>
         </div>
         <div className="form-control">
         <label htmlFor="amount">Amount<br/>(negative = expense, positive = income)</label>
         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."></input>
         </div>
         <button className="btn">Submit Transaction</button>
        </form> 
    </div>
  )
}

export default AddTransaction