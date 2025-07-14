import React from 'react';
import { Task } from '../pages/Base';
import TaskItem from './TaskItem';
import TaskStatusText from './TaskStatusText';

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
            <TaskStatusText type="title" statusColor={props.statusColor} label={props.statusName} />
            <TaskStatusText type="count" statusColor={props.statusColor} label={statusCount} />
        </div>
        <TaskItem taskList={props.taskList} />
    </div>
  );
};

export default TaskArea;