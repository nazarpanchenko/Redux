import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {
    return (
        <ul className="list">
            {tasks.map(task => (
                <Task
                    key={task.id}
                    {...task}
                    onChange={handleTaskStatusChange}
                    onDelete={handleTaskDelete}
                />
            ))}
        </ul>
    );
};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            done: PropTypes.bool
        })
    ),
    handleTaskStatusChange: PropTypes.func.isRequired,
    handleTaskDelete: PropTypes.func.isRequired
};

export default TasksList;
