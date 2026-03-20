import './PendingTask.css'
import TaskContext from '../taskContext'
import { useContext } from 'react'
import TaskItem from './TaskItem'

export default function PendingTask() {
    const { tasks } = useContext(TaskContext)
    const pending = tasks.filter(task => task.tags.pending)
    return (
        <div className="pending-container">
            <h4>pending</h4>
            {
                pending.length < 1
                    ? <p>no pending</p>
                    : tasks.map((task, i) => (
                        task.tags.pending && <TaskItem key={i} value={task} id={i} />
                    ))
            }
        </div>
    )
}
