import React from 'react';
import Task from './Task';
import Button from '../../modules/Button';

const TaskList = () => {
  return (
    <div className="task-wrapper">
      <ul className="task-list">
        <li className="task-item">
          <h3 className="task-title">タスク1</h3>
          <Button className="thirdry" label="詳細" onClick={() => {}}></Button>
        </li>
        <li className="task-item">
          <h3 className="task-title">タスク2</h3>
          <Button className="thirdry" label="詳細"></Button>
        </li>
        <li className="task-item">
          <h3 className="task-title">タスク3</h3>
          <Button className="thirdry" label="詳細"></Button>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;