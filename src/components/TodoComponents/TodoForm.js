import React from 'react';

function TodoForm(props) {
    return (
        <form name="todoAddForm" onSubmit={props.addTodoHandler}>
            <input />
            <button onclick={props.addTodoHandler}>Add Todo</button>
            <button onclick={props.addTodoHandler}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;