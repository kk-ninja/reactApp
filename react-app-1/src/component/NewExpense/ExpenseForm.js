import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) =>
{
    const [enteredTitle , setEnteredTitle] = useState("");
    const [enteredAmount , setEnteredAmount] = useState("");
    const [enteredDate , setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState(
    //     {
    //         enteredTitle :"",
    //         enteredAmount : "",
    //         enteredDate : ""
    //     }
    // );]
    const titleChangeHandler = (event) =>
    {
        setEnteredTitle(event.target.value);
        //for sigle useStat() there are two ways to update state
        //1-
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredTitle : event.target.value
        //     }
        // );
        // 2 - 
        // setUserInput((prevState) => 
        // {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    }
    const amountChangeHandler = (event) =>
    {
        setEnteredAmount(event.target.value);
        //for sigle useStat() there are two ways to update state
        //1-
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredAmount : event.target.value
        //     }
        // );
        // 2 - 
        // setUserInput((prevState) => 
        // {
        //     return {...prevState, enteredAmount : event.target.value};
        // });
    }
    const dateChangeHandler = (event) =>
    {
        setEnteredDate(event.target.value);
        //for sigle useStat() there are two ways to update state
        //1-
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredDate : event.target.value
        //     }
        // );
        // 2 - 
        // setUserInput((prevState) => 
        // {
        //     return {...prevState, enteredDate : event.target.value};
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let enteredDate1 = new Date(enteredDate);
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: enteredDate1
        };
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate(""); 
    }

    

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} required/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step='0.01' onChange={amountChangeHandler} value={enteredAmount} required/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2022-01-23'  onChange={dateChangeHandler} value={enteredDate} required/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;