import React, { useState } from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import TaskAdd from './Tasks/TaskAdd';
import TaskDetail from './Tasks/TaskDetail';

export type Task = {
    id: number;
    title: string;
    content: string;
    status: number;
};

const initialTasks: Task[] = [
    {
        id: 1,
        title: 'タスク1',
        content: 'タスク1の内容',
        status: 1,
    },
    {
        id: 2,
        title: 'タスク2',
        content: 'タスク2の内容',
        status: 2,
    },
    {
        id: 3,
        title: 'タスク3',
        content: 'タスク3の内容',
        status: 3,
    },
    {
        id: 4,
        title: 'タスク4',
        content: 'タスク4の内容',
        status: 1,
    },
    {
        id: 5,
        title: 'タスク5',
        content: 'タスク5の内容',
        status: 2,
    },
    {
        id: 6,
        title: 'タスク6',
        content: 'タスク6の内容',
        status: 1,
    },

];

const Base = () => {
    let [tasks, setTasks] = useState<Task[]>(initialTasks);

    const addTask = (task: Task) => {
        task.id = tasks.length + 1;
        // console.log(task);
        setTasks([...tasks, task]);
    };
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
                <Route path="/add" element={<TaskAdd addTask={addTask} />} />
                <Route path="/detail/:taskId" element={<TaskDetail />} />
            </Routes>
        </div>
    );
};

export default Base;