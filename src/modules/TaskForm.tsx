import React, { useState } from 'react';
import { Task } from '../pages/Base';

interface Props {
    task: Task;
    setTask: (task: Task) => void;
}

const TaskForm = (props: Props) => {
    const [task, setTask] = useState<Task>(props.task);
    return (
        <div>
            <h1>TaskForm</h1>
        </div>
    );
};

export default TaskForm;