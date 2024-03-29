import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value); //call the function 'addTodo'
        setValue('')
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="What is the task today?"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                autoFocus
            />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}