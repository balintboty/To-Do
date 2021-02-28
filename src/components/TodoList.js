import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    };

    const editTodo = (id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
    };

    return (
        <div>
            <h1>TODO List:</h1>
            <TodoForm
                onSubmit={addTodo}
            />
            <Todo
                todos={todos}
                completeTodos={completeTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                completeTodo={completeTodo}
            />
        </div>
    )
}

export default TodoList;