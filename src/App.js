import React, { useState } from 'react';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks.js';

const EXAMPLE = []

const App = () => {
  const [tasks, setTasks] = useState(EXAMPLE);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const changeTaskHandler = (task) => {
    var removeIndex = tasks.map(item => item.id).indexOf(task.id);

  ~removeIndex && tasks.splice(removeIndex, 1);
    console.log(task)
    setTasks((prevtasks) => {
      return [task, ...prevtasks];
    });
  };

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} onChangeTask={changeTaskHandler} />
    </div>
  );
};

export default App;
