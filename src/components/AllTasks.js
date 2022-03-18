import TaskDetails from "./TaskDetails";

import './styles/AllTasks.css';

function AllTasks(props) {

    function toggleTaskCompleted(id) {
        props.updateTask(id);
    }

    function deleteTask(id) {
        props.deleteTask(id);
    }

    function editTask(id, newName) {
        props.editTask(id, newName);
    }

    const taskList = props.tasks.map(task => (
        <TaskDetails 
            id={task.id} 
            name={task.name} 
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
         />
    ));
    return (
        <ul className="all-tasks">
            {taskList}
        </ul>
    );
}

export default AllTasks;