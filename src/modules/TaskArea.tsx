import React from 'react';
import { Task } from '../pages/Base';
import TaskList from './TaskList';
import TaskStatusText from './TaskStatusText';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';

interface Props {
  statusColor: string;
  statusName: string;
  taskList: Task[];
}

const TaskArea = (props: Props) => {
  const statusCount = props.taskList.length;

  const {setNodeRef} = useDroppable({
    id: props.statusColor,
  });
  
  return (
    <SortableContext
      id={props.statusColor}
      items={props.taskList}
      strategy={verticalListSortingStrategy}
    >
      <div className={`task-area back-color-${props.statusColor}`} ref={setNodeRef}>
          <div className="task-area-header-wrapper">
              <TaskStatusText type="title" statusColor={props.statusColor} label={props.statusName} />
              <TaskStatusText type="count" statusColor={props.statusColor} label={statusCount} />
          </div>
          <TaskList taskList={props.taskList} />
      </div>
    </SortableContext>
  );
};

export default TaskArea;