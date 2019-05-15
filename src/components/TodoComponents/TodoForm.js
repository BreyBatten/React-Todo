import React from 'react';

function TodoForm(props) {
    return (
        <form name="todoAddForm" onSubmit={props.addTodoHandler}>
            <input
                type="text" 
                placeholder="...todo"
            />
            <button onClick={props.addTodoHandler}>Add Todo</button>
            <button onClick={props.addTodoHandler}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;