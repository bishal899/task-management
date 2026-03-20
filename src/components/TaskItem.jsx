import { useContext } from 'react'
import './TaskItem.css'
import TaskContext from '../taskContext'

export default function TaskItem({ value, id }) {
    const { editTask, completeTask, deleteTask } = useContext(TaskContext)

    return (
        <div className={`task ${value.tags.completed && 'completed'}`}>
            <div className="task-info">
                <p className="task-heading">{value.task}</p>
                <span>{value.time}</span>
            </div>
            <div className="task-btns">
                <button onClick={() => completeTask(id)} id='completeBtn'>complete</button>
                <button onClick={() => deleteTask(id)}>delete</button>
                <button onClick={() => editTask(id)}>edit</button>
            </div>
        </div>
    )
}
