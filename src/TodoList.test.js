import { fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList';

// smoke test
it("should render withour error", () => {
	render(<TodoList />);
})

// snapshot test
it("should match snapshot", () => {
	const {asFragment} = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
})

// business logic
it("should add todo", () => {
	const {queryByText, getByLabelText, getByText} = render(<TodoList />);
	expect(queryByText("test Todo")).not.toBeInTheDocument();

	const task = getByLabelText("Task");
	const addBtn = getByText("Add");
	fireEvent.change(task, {target: {value: "test Todo"}});
	fireEvent.click(addBtn);

	expect(queryByText("test Todo")).toBeInTheDocument();
})

it("should remove todo", () => {
	const {queryByText, getByLabelText, getByText} = render(<TodoList />);
	expect(queryByText("test Todo")).not.toBeInTheDocument();

	const task = getByLabelText("Task");
	const addBtn = getByText("Add");
	fireEvent.change(task, {target: {value: "test Todo"}});
	fireEvent.click(addBtn);

	expect(queryByText("test Todo")).toBeInTheDocument();

	const removeBtn = getByText("X");
	fireEvent.click(removeBtn);

	expect(queryByText("test Todo")).not.toBeInTheDocument();
})

it("should edit todo", () => {
	const {queryByText, getByLabelText, getByText, getByDisplayValue} = render(<TodoList />);
	expect(queryByText("test Todo")).not.toBeInTheDocument();

	const task = getByLabelText("Task");
	const addBtn = getByText("Add");
	fireEvent.change(task, {target: {value: "test Todo"}});
	fireEvent.click(addBtn);

	const todo = getByText("test Todo");
	expect(todo).toBeInTheDocument();
	debugger;
	fireEvent.click(todo);
	const todoEdit = getByDisplayValue("test Todo");
	const updateBtn = getByText("Update");
	fireEvent.change(todoEdit, {target: {value: "something new"}});
	fireEvent.click(updateBtn);
})