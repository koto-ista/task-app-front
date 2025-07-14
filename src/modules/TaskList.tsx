import React from 'react';
import { Task as TaskType} from '../pages/Base';
import TaskItem from './TaskItem';

interface Props {
  taskList: TaskType[];
}

const TaskList = (props: Props) => {
  return (
    <div className="task-wrapper">
      <ul className="task-list">
        {props.taskList.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;