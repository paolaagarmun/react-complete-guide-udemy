import { useState } from "react/cjs/react.development"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const handleFilterChange = selectedYear => {
      setFilteredYear(selectedYear)
    }
    return (
        <>
            {/* <div className="expenses">
                <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
                />
                <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
                />
                <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
                />
            </div> */}
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilterChange} />
              {
                  props.items.map(item => (
                      <ExpenseItem
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                      />
                ))
              }  
            </Card>
        </>
       
    )
}

export default Expenses