import React, { useState } from 'react';
import Button from '../../modules/Button';
import { useNavigate } from 'react-router-dom';
import { Task } from '../Base';
import TaskForm from '../../modules/TaskForm';

interface Props {
    addTask: (task: Task) => void;
}

const TaskAdd = (props: Props) => {
    return (
        <div className="task-wrapper">
            <TaskForm setTask={props.addTask} />
        </div>
    );
};

export default TaskAdd;