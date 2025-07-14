import React, { useState } from 'react';
import TaskArea from '../../modules/TaskArea';
import { Task } from '../Base';

const status: Status[] = [
    {
        id: 0,
        status: 'すべて',
        color: 'all',
    },
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
];

type Status = {
    id: number;
    status: string;
    color: string;
};

interface Props {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

const Home = (props: Props) => {
    const [tasks, setTasks] = useState<Task[]>(props.tasks);
    const taskListByStatus = (status: Status) => {
        return tasks.filter((task) => task.status === status.id);
    };

  return (
    <div className="home-wrapper">
            { 
            status.filter((status) => status.id !== 0)
            .map((status) => (
                <TaskArea key={status.id} statusColor={status.color} statusName={status.status} taskList={taskListByStatus(status)} />
            ))}        
    </div>
  );
};

export default Home;