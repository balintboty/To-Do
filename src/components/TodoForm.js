import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [toDoInput, setToDoInput] = useState(props.edit ? props.edit.value : '');

    const useFocus = useRef(null)

    useEffect(() => {
        useFocus.current.focus()
    });

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: toDoInput
        })
        setToDoInput('');
    };

    const handleChange = e => {
        setToDoInput(e.target.value);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {
                props.edit ?
                    <div>
                        <input type="text"
                               placeholder="Update TODO"
                               value={toDoInput}
                               className="todo-input edit"
                               onChange={handleChange}
                               ref={useFocus}/>
                        <button className="todo-button edit">Update</button>
                    </div>
                 :
                    <div>
                        <input type="text"
                               placeholder="Add a TODO"
                               value={toDoInput}
                               className="todo-input"
                               onChange={handleChange}
                               ref={useFocus}
                        />
                        <button className="todo-button">Add TODO</button>
                    </div>

            }

        </form>
    );
}

export default TodoForm;