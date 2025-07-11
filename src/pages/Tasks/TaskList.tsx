import React from 'react';
import Task from './Task';
import Button from '../../modules/Button';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const navigate = useNavigate();
  return (
    <div className="task-wrapper">
      <ul className="task-list">
        <li className="task-item">
          <h3 className="task-title">タスク1</h3>
          <Button className="thirdry" label="詳細" onClick={() => { navigate('/detail/1') }}/>
        </li>
        <li className="task-item">
          <h3 className="task-title">タスク2</h3>
          <Button className="thirdry" label="詳細" onClick={() => { navigate('/detail/2') }}/>
        </li>
        <li className="task-item">
          <h3 className="task-title">タスク3</h3>
          <Button className="thirdry" label="詳細" onClick={() => { navigate('/detail/3') }}/>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;