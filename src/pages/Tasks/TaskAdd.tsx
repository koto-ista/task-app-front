import React, { useContext, useState } from 'react';
import Button from '../../modules/Button';
import { useNavigate } from 'react-router-dom';
import { TaskContext, TaskContentType, Task } from '../Base';

const TaskAdd = () => {
    const navigate = useNavigate();
    const { tasks, setTasks }: TaskContentType = useContext<TaskContentType>(TaskContext);

    // 状態変数の定義
    const [task, setTask] = useState<Task>({
        id: tasks.length + 1,
        title: '',
        content: '',
        status: 1
    });

    // フォームの入力値をセットする関数
    const handleTitleChange = (e: any) => {
        setTask({ ...task, title: e.target.value });
    };
    const handleContentChange = (e: any) => {
        setTask({ ...task, content: e.target.value });
    };

    // フォームの送信を処理する関数
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(tasks);
        console.log(task);
        setTasks([...tasks, task]);
        navigate('/');
    };

    return (
        <div className="task-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="task-form-wrapper">
                    <div className="task-header">
                        <input type="text" placeholder="タイトル" value={task.title} onChange={handleTitleChange} />
                    </div>
                    <div className="task-body">
                        <textarea name="" id="" placeholder="内容" value={task.content} onChange={handleContentChange}></textarea>
                    </div>
                </div>
                <div className="task-footer">
                    <Button className="primary" label="登録" />
                </div>
            </form>
        </div>
    );
};

export default TaskAdd;