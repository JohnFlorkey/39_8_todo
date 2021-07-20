import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';

function TodoList() {
	const [ tasks, setTasks ] = useState([]);

	function addTask(task) {
		if (task.id) {
			// update task
			setTasks(oldTasks => (oldTasks.map(t => ({
				id: t.id,
				task: t.isEditing ? task.task : t.task,
				isEditing: false
			}))))
		} else {
			// add new task
			setTasks(oldTasks => ([...oldTasks, { id: uuid(), task: task.task, isEditing: false }]))
		}
	}

	function removeTask(taskId) {
		setTasks(oldTasks => (oldTasks.filter(task => task.id !== taskId)))
	}

	function editTask(taskId) {
		setTasks(oldTasks => (oldTasks.map(task => ({
			id: task.id,
			task: task.task,
			isEditing: task.id === taskId ? true : false
		}))))
	}

	return (
		<div className="TodoList">
			<NewTodoForm key={uuid()} addTask={addTask} />
			<div className="TodoList-todos">
				{tasks.map(task => task.isEditing ?
					<NewTodoForm key={task.id} initialState={task} addTask={addTask} /> :
					<Todo key={task.id} task={task.task} removeTask={() => removeTask(task.id)} editTask={() => editTask(task.id)} />)}
			</div>
		</div>
	)
}

export default TodoList;