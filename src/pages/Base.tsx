import React, { createContext, useState } from 'react';
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

// グローバル状態変数のタスクの型定義
export type TaskContentType = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};
// グローバル状態変数のタスクの初期値
export const TaskContext = createContext<TaskContentType>({
    tasks: [],
    setTasks: (tasks: Task[]) => { },
});

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
    // タスクの状態変数とその更新関数
    const [tasks, setTasks] = useState<Task[]>(initialTasks); 
    const taskContextValue: TaskContentType = {
        tasks: tasks,
        setTasks: setTasks
    };
    return (
        <div>
            <TaskContext.Provider value={taskContextValue}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<TaskAdd />} />
                    <Route path="/detail/:taskId" element={<TaskDetail />} />
                </Routes>
            </TaskContext.Provider>
        </div>
    );
};

export default Base;