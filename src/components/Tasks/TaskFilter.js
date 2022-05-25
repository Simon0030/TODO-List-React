import React from 'react';

import './TaskFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='BOTH'>BOTH</option>
          <option value='COMPLETED'>COMPLETED</option>
          <option value='UNCOMPLETED'>UNCOMPLETED</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
