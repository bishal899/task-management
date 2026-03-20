import { useContext } from 'react'
import './TaskContainer.css'
import TaskItem from './TaskItem'
import TaskContext from '../taskContext'

export default function TaskContainer() {
  const { tasks } = useContext(TaskContext)

  return (
    <div className="task-container">
      <h4>all tasks</h4>
      <div className="container">
        {
          tasks.length < 1
            ? <p>task is not added yet!</p>
            : tasks.map((task, i) => (
              <TaskItem key={i} value={task} id={i} />
            ))
        }
      </div>
    </div>
  )
}
