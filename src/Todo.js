import React from 'react';

function Todo({task, removeTask, editTask}) {
    return (
        <div onClick={editTask}>{task} <button onClick={removeTask}>X</button></div>
    )
}
export default Todo;