import React from 'react';

interface Props {
    type: string;
    statusColor: string;
    label: string|number;
}

const TaskStatusText = (props: Props) => {

    if (props.type === 'title') {
        return <h2 className={`task-area-header-title color-${props.statusColor}`}>{props.label}</h2>;
    } else if (props.type === 'count') {
        return <p className={`task-area-header-count color-${props.statusColor}`}>{props.label}</p>;
    } else {
        return <p> - </p>;
    }

};
export default TaskStatusText;