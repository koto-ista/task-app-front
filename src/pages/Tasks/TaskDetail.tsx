import React from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../../modules/TaskForm';
import { Task } from '../Base';

interface Props {
    tasks: Task[];
    editTask: (task: Task) => void;
}

const TaskDetail = (props: Props) => {
    const { taskId } = useParams();
    const task = props.tasks.find(task => task.id === Number(taskId));
  return (
    <div className="task-wrapper">
        <TaskForm task={task} setTask={props.editTask} />
    </div>
    );
};

export default TaskDetail;