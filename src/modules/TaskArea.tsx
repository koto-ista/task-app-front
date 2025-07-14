import React from 'react';
import { Task } from '../pages/Base';
import TaskItem from './TaskItem';

interface Props {
  statusColor: string;
  statusName: string;
  taskList: Task[];
}

const TaskArea = (props: Props) => {
    const statusCount = props.taskList.length;
  return (
    <div className={`task-area back-color-${props.statusColor}`}>
      <div className="task-area-header-wrapper">
        <h2 className={`task-area-header-title color-${props.statusColor}`}>{props.statusName}</h2>
        <p className={`task-area-header-count color-${props.statusColor}`}>{statusCount}</p>
      </div>
        <TaskItem taskList={props.taskList} />
    </div>
  );
};

export default TaskArea;