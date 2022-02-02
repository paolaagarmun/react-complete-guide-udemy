

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 91.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e2",
      title: "TV",
      amount: 465.78,
      date: new Date(2021, 3, 4)
    },
    {
      id: "e3",
      title: "Wooden desk",
      amount: 40.95,
      date: new Date(2021, 1, 15)
    }
  ]

  const handleAddExpense = expense => {
    console.log('In app.js');
    console.log(expense)
  }

  return (
    <div>
    <NewExpense onAddExpense={handleAddExpense}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
