import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { Task as TaskType} from '../pages/Base';

interface Props {
  taskList: TaskType[];
}

const TaskItem = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="task-wrapper">
      <ul className="task-list">
        {props.taskList.map((task) => (
          <li className="task-item">
            <h3 className="task-title">{task.title}</h3>
            <Button className="thirdry" label="詳細" onClick={() => { navigate('/detail/' + task.id) }}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskItem;