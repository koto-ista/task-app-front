import React from 'react';
import TaskList from '../pages/Tasks/TaskList';
import { Task } from '../pages/Base';

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
        <TaskList taskList={props.taskList}></TaskList>
    </div>
  );
};

export default TaskArea;