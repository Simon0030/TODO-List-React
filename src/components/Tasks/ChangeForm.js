import React, { useState } from 'react';

import './ChangeForm.css';

const ChangeForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(props.name);
  const [enteredAmount, setEnteredAmount] = useState(props.check);
  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
        id: props.id,
      title: enteredTitle,
      amount: enteredAmount,
      info: ''
    };

    props.onSaveExpenseData(taskData);
    setEnteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Task Name</label>
          <input
            type='text'
            defaultValue={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Completed</label>
          <input
            type='checkbox'
            value='Completed'
            onChange={amountChangeHandler}
            defaultChecked={enteredAmount}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Change</button>
      </div>
    </form>
  );
};

export default ChangeForm;
