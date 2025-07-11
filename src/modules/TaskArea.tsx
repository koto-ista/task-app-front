import React from 'react';

const TaskArea = () => {
  return (
    <div className="task-area">
      <div className="task-area-header">
        <h2>タスク一覧</h2>
      </div>
      <div className="task-area-body">
        <ul className="task-list">
          <li className="task-item">
            <h3 className="task-title">タスク1</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskArea;