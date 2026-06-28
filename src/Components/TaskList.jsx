import React from 'react'

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  }
  return (
    <div>
      <ul className='task-list'>
        {tasks.map((task, index) => (
          <li key={index} className='task-card' data-priority={task.priority.toLowerCase()}>
            <div className='task-info'>
              <h3 className={task.completed ? "completed" : ""}>
                {task.text}
              </h3>
              <p>{task.priority} • {task.category}</p>
              <p>📅 {task.date}</p>
              <p>🏷️ {task.type}</p>
            </div>

            <div className='actions'>
              <button onClick={() => toggleComplete(index)} className='complete-btn'>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(index)} className='delete-btn'>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


