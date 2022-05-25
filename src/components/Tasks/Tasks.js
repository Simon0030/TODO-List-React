import React, { useState } from 'react';
import TaskFilter from './TaskFilter';
import TasksList from './TaskList';
import './Tasks.css';

const Tasks = (props) => {
  const [value, setValue] = useState('BOTH');
  const handleChange = (selected) => {
    console.log(selected)
    setValue(selected);
  };

  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no tasks!</h2>;
  }

  const shouldDisplayCompleted =
    value === 'BOTH' || value === 'COMPLETED';
  const shouldDisplayUnCompleted =
    value === 'BOTH' || value === 'UNCOMPLETED';

  const filteredTasksCompleted = props.items.filter((task) => {
    if (task.amount === 'Completed'){
      task.info = true
    }
    return task.amount === 'Completed';
  });

  const filteredTasksNoCompleted = props.items.filter((task) => {
    if (task.amount!=='Completed'){
      task.amount = 'Uncompleted'
      task.info = false
    }
    return task.amount === 'Uncompleted';
  });
  

  return (
    <><TaskFilter newValue={value} onChangeFilter={handleChange}/><div>
      <div className='expenses'>
        {shouldDisplayUnCompleted && <TasksList items={filteredTasksNoCompleted} onChange={props.onChangeTask} />}
        {shouldDisplayCompleted && <TasksList items={filteredTasksCompleted} onChange={props.onChangeTask} />}
      </div>
    </div></>
  );
};

export default Tasks;
