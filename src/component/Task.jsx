import React from "react";


const Task = (props) => {
    return (
        <div>
            <h2>{props.taskName}</h2>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    );
};

export default Task;