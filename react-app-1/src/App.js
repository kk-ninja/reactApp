import { useState } from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id : 0,
    date : new Date(2021, 1, 12),
    title: "Bike Insurance",
    amount: "2500"
  },
  {
    id : 1,
    date : new Date(2022, 2, 12),
    title: "Car Insurance",
    amount: "25000"
  },
  {
    id : 2,
    date : new Date(2023, 3, 12),
    title: "Bus Insurance",
    amount: "250000"
  },
  {
    id : 3,
    date : new Date(2022, 4, 12),
    title: "Plan Insurance",
    amount: "2500000"
  }
];

const App = () => {
  const [expenses, setExpense] = useState(dummy_expenses);

  const onAddExpenseHandler = (eventExpense) => {
    setExpense((preExpenses) => {
      return [eventExpense, ...expenses];
    });
  }
  
  return (
      <div>
        <NewExpense onAddExpense={onAddExpenseHandler} />
        <Expenses items={expenses} ></Expenses>
      </div>
    );
}

export default App;
