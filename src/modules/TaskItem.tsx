import React from 'react';
import { Task } from '../pages/Base';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface Props {
  task: Task;
}

const TaskItem = (props: Props) => {
  const navigate = useNavigate();
  return (
    <li className="task-item">
      <h3 className="task-title">{props.task.title}</h3>
      <Button className="thirdry" label="詳細" onClick={() => { navigate('/detail/' + props.task.id) }}/>
    </li>
  );
};

export default TaskItem;