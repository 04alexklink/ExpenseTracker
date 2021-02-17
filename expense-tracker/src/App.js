import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/incomeExpenses'
import TransactionsList from './components/TransactionsList'
import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <div>
      <Header text="Expense Tracker"/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionsList/>
      <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
