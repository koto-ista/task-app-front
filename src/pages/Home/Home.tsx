import React from 'react';
import TaskArea from '../../modules/TaskArea';

type Status = {
    id: number;
    status: string;
    color: string;
};

export type Task = {
    id: number;
    title: string;
    content: string;
    status: number;
};

const tasks: Task[] = [
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

const status: Status[] = [
    {
        id: 1,
        status: '未着手',
        color: 'todo',
    },
    {
        id: 2,
        status: '進行中',
        color: 'inProgress',
    },
    {
        id: 3,
        status: '完了',
        color: 'done',
    },
    {
        id: 4,
        status: 'すべて',
        color: 'all',
    },
];

const Home = () => {
    const taskListByStatus = (status: Status) => {
        return tasks.filter((task) => task.status === status.id);
    };

  return (
    <div className="home-wrapper">
        { 
        status.filter((status) => status.status !== 'すべて')
        .map((status) => (
            <TaskArea key={status.id} statusColor={status.color} statusName={status.status} taskList={taskListByStatus(status)} />
        ))}
    </div>
  );
};

export default Home;