import './styles/AddTask.css';
import { useState } from 'react';

function AddTask(props) {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        if(name==="") {
            alert("Enter a valid task name!");
        }
        else {
            props.addTask(name);
            setName("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>
                <label className="large-label" htmlFor="todo-input">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="todo-input"
                className="input-text"
                name="todo-title"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn-add" id="btn-add">
            Add task
            </button>
        </form>
    );
}

export default AddTask;