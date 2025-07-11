import React from 'react';
import Button from '../../modules/Button';
import { useNavigate } from 'react-router-dom';

const TaskAdd = () => {
    const navigate = useNavigate();
    return (
        <div className="task-wrapper">
            <form action="">
                <div className="task-form-wrapper">
                    <div className="task-header">
                        <input type="text" placeholder="タイトル" />
                    </div>
                    <div className="task-body">
                        <textarea name="" id="" placeholder="内容"></textarea>
                    </div>
                </div>
                <div className="task-footer">
                    <Button className="primary" label="登録" onClick={() => { navigate('/') }} />
                </div>
            </form>
        </div>
    );
};

export default TaskAdd;