import React from 'react';
import { useState } from 'react';
import './TaskItem.css';
import ChangeForm from './ChangeForm';

const ExpenseItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData
    };
    props.onChange(expenseData);
    setIsEditing(false);
  };

  console.log(props.id)

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  
  return (
    <>
    <li>
      <div className='expense-item'>
        <div className='expense-item__description' onClick={startEditingHandler} >
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{props.amount}</div>
        </div>
      </div>
    </li>
    {isEditing && (<div className='new-expense'>
    <ChangeForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler} 
      name = {props.title}
      check = {props.info}
      id = {props.id}
      
      />
      </div>
  )}
  </>
  );
};

export default ExpenseItem;
