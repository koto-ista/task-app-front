import React, { useState } from 'react';
import { Task } from '../pages/Base';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

interface Props {
    task?: Task;
    setTask: (task: Task) => void;
}

const TaskForm = (props: Props) => {
    const navigate = useNavigate();

    // 状態変数の定義
    const [task, setTask] = useState<Task>({
        id: 0,
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
        props.setTask(task);
        navigate('/');
    };
    return (
        <div>
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

export default TaskForm;