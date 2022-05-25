import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TasksList = (props) => {

  return (
    <ul className='expenses-list'>
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          id = {task.id}
          title={task.title}
          amount={task.amount}
          info={task.info}
          onChange={props.onChange}
        />
      ))}
    </ul>
  );
};

export default TasksList;
