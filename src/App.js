import { useState } from 'react';
import { nanoid } from "nanoid";

import Header from './components/Header';
import AddTask  from './components/AddTask';
import AllTasks from './components/AllTasks';
import Footer from './components/Footer';

import './App.css';

function App() {

  let DATA = [
    { id: "" + nanoid(), name: "Eat good food", completed: true },
    { id: "" + nanoid(), name: "Sleep", completed: false },
    { id: "" + nanoid(), name: "Repeat", completed: false }
  ];
  const [tasks, setTasks] = useState(DATA);

  function addTask(name) {
    const newTask = { id: "" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function updateTask(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks); //To chech if the state is being updated
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="todoapp">
      <Header />
      <AddTask addTask={addTask}/>
      <AllTasks tasks = {tasks} updateTask={updateTask} deleteTask={deleteTask} editTask={editTask}/>
      <Footer />
    </div>
  );
}

export default App;
