import { useState } from 'react';

import './styles/TaskDetails.css';

function TaskDetails(props) {

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(newName==="") {
            alert("Enter a valid task name!");
        }
        else {
            props.editTask(props.id, newName);
            setNewName("");
            setEditing(false);
        }
    }

    const editTemplate = (
        <form className='edit-task' onSubmit={handleSubmit}>
            <h2>
                <label className="large-label" htmlFor="todo-input">
                    New name for {props.name}
                </label>
            </h2>
            <input
                type="text"
                id={`edit-task-${props.id}`}
                className="edit-task-name"
                name="todo-title"
                autoComplete="off"
                value={newName}
                onChange={handleChange}
            />
            <div className='task-buttons'>
                <button 
                    id={`btn-save-${props.id}`} 
                    className='btn-task btn-save'
                >
                    Save
                </button>
                <button 
                    id={`btn-cancel-${props.id}`} 
                    className='btn-task btn-cancel'
                    onClick={() => {
                        setEditing(false); setNewName("")
                    }}
                >
                    Cancel
                </button>
            </div>
        </form>
    );

    const viewTemplate = (
        <div className='task-details'>
            <div className='task'>
                <input 
                    id={`task-${props.id}`} 
                    type='checkbox' 
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}    
                />
                <label htmlFor={`task-${props.id}`} className='todo-label'>
                    <h2>{props.name}</h2>
                </label>
            </div>
            <div className='task-buttons'>
                <button 
                    id={`btn-edit-${props.id}`} 
                    className='btn-task btn-edit'
                    onClick={() => setEditing(true)}    
                >
                    Edit
                </button>
                <button 
                    id={`btn-delete-${props.id}`} 
                    className='btn-task btn-delete'
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );


    return (
        <li className='todo'> 
            {isEditing ? editTemplate : viewTemplate}
        </li>
    );
}

export default TaskDetails;