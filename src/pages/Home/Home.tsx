import React from 'react';
import TaskArea from '../../modules/TaskArea';

type Status = {
    id: number;
    status: string;
    color: string;
};

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
  return (
    <div className="home-wrapper">
        { 
        status.filter((status) => status.status !== 'すべて')
        .map((status) => (
            <TaskArea key={status.id} statusColor={status.color} statusName={status.status} statusCount={0} />
        ))}
    </div>
  );
};

export default Home;