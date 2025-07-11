import React from 'react';
import Button from '../../modules/Button';

const TaskAdd = () => {
    return (
        <div className="task-add-wrapper">
            <form action="">
                <div className="task-add-form-wrapper">
                    <div className="task-add-header">
                        <input type="text" placeholder="タイトル" />
                    </div>
                    <div className="task-add-body">
                        <textarea name="" id="" placeholder="内容"></textarea>
                    </div>
                </div>
                <div className="task-add-footer">
                    <Button className="primary" label="登録" onClick={() => { }} />
                </div>
            </form>
        </div>
    );
};

export default TaskAdd;