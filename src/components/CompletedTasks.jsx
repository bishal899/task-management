import './CompletedTasks.css'
import TaskContext from '../taskContext'
import { useContext } from 'react'
import TaskItem from './TaskItem'

export default function CompletedTasks() {
    const { tasks } = useContext(TaskContext)
    const completed = tasks.filter(task => task.tags.completed)
    return (
        <div className="completed-container">
            <h4>completed</h4>
            <div className="container">
                {
                    completed.length < 1
                        ? <p>not completed any task</p>
                        : tasks.map((task, i) => (
                            task.tags.completed && <TaskItem key={i} value={task} id={i} />
                        ))
                }
            </div>
        </div>
    )
}
