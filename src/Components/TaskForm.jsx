import React from 'react'
import { useState } from 'react'
export default function TaskForm({ addTask }) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState("Medium");
    const [category, setCategory] = useState("General");
    const [date, setDate] = useState("");
    const [type, setType] = useState("To Do");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") {
            alert("Please enter a task.");
            return;
        }
        addTask({ text: task, priority, category, date, type, completed: false })
        //Reset State:
        setTask("");
        setPriority("Medium");
        setCategory('General');
        setDate("");
        setType("To Do");
    }
    return (
        <form onSubmit={handleSubmit} className='task-form'>
            <div id="inp">
                <input
                    type="text"
                    placeholder='Enter Your Task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button type='submit'>Add Task</button>
            </div>

            <div id="extra-inputs">

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="custom-date"
                />

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="custom-select"
                >
                    <option>To Do</option>
                    <option>Meeting</option>
                    <option>Assignment</option>
                    <option>Project</option>
                    <option>Study</option>
                    <option>Shopping</option>
                    <option>Health</option>
                    <option>Other</option>
                </select>

            </div>

            <div id="btns" className='select-group'>
                <select value={priority} onChange={(e) => setPriority(e.target.value)} className='custom-select'>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select value={category} onChange={(e) => setCategory(e.target.value)} className='custom-select'>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}