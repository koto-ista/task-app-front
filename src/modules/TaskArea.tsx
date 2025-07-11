import React from 'react';
import TaskList from '../pages/Tasks/TaskList';

interface Props {
  statusColor: string;
  statusName: string;
  statusCount: number;
}

const TaskArea = (props: Props) => {
  return (
    <div className={`task-area back-color-${props.statusColor}`}>
      <div className="task-area-header-wrapper">
        <h2 className={`task-area-header-title color-${props.statusColor}`}>{props.statusName}</h2>
        <p className={`task-area-header-count color-${props.statusColor}`}>{props.statusCount}</p>
      </div>
        <TaskList></TaskList>
    </div>
  );
};

export default TaskArea;