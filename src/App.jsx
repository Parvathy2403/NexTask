import React from 'react'
import { useState,useEffect } from 'react';      
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_ ,i) => i != index))
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='container'>
      <header className='hero'>
        <h1>NexTask</h1>
        <h4>Stay Organized. Get Things Done.</h4>
      </header>
      
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />

      {tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks}>Clear All Tasks</button>)}
    </div>
  )
}
