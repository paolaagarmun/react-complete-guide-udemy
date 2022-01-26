import Card from "./Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

function Expenses(props) {
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