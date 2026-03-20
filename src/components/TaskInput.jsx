import { useContext } from 'react'
import './TaskInput.css'
import TaskContext from '../taskContext'

export default function TaskInput() {
    const { newTask, setNewTask, addTask } = useContext(TaskContext)

    return (
        <div className="input-container">
            <div className="task-input">
                <input
                    type="text"
                    className={`input ${newTask ? 'has-value' : ''}`}
                    required
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTask()}
                />
                <label>type new task</label>
            </div>
            <button onClick={addTask}>add task</button>
        </div>
    )
}
