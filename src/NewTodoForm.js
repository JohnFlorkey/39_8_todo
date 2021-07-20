import React, { useState } from 'react';

function NewTodoForm({initialState, addTask}) {
	let newState = {
		id: "",
		task: "",
		isEditing: false
	};
	if (initialState) {
		newState.id = initialState.id;
		newState.task = initialState.task;
		newState.isEditing = initialState.isEditing;
	}
	const [ formData, setformData ] = useState(newState);
	
	function handleSubmit(evt) {
		evt.preventDefault();
		addTask(formData);
		// setformData({
		// 	id: "",
		// 	task: "",
		// 	isEditing: false
		// })
	}

	function handleChange(evt) {
		const { name, value } = evt.target;
		setformData(formData => ({...formData, [name]: value}));
	}
	return (
		<form onSubmit={handleSubmit} className="NewTodoForm">
			<label className="NewTodoForm-label" htmlFor="task">Task</label>
			<input className="NewTodoForm-input" type="text" name="task" id="task" value={formData.task} onChange={handleChange}></input>
			<button>{formData.isEditing ? "Update" : "Add"}</button>
		</form>
	)
}

export default NewTodoForm;