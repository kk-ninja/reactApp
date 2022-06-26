import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const[filterYear, setFilterYear] = useState('2022');
  const changeFilterHandler =(selectedFilterYear) =>{
    //console.log(selectedFilterYear);
    setFilterYear(selectedFilterYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });
      return (
        <Card className="expenses">
          <ExpensesFilter filteredYear={filterYear} onChangeFilter={changeFilterHandler}/>
          {filteredExpenses.map( expense =>
             <ExpenseItem key={expense.id} date={expense.date} amount={expense.amount} title={expense.title} />
          )}
        </Card>
      );
}
export default Expenses;