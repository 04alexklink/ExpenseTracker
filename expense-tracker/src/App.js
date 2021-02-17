import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/incomeExpenses'

function App() {
  return (
    <div>
      <Header text="Expense Tracker"/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      </div>
    </div>
  );
}

export default App;
