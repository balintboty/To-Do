import React, {useState} from 'react';

import {RiCloseCircleLine} from "react-icons/all";
import {TiEdit} from 'react-icons/ti';
import TodoForm from "./TodoForm";

function Todo(props) {
    const {todos, completeTodo, removeTodo, editTodo} = props;
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        editTodo(edit.id, value);
        setEdit({id: null, value: ''})
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
             key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className='edit-icon'
                />
            </div>
        </div>
    ))
}

export default Todo;