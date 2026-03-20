import { useState } from 'react'
import './App.css'
import TaskContainer from './components/TaskContainer'
import TaskInput from './components/TaskInput'
import TaskContext from './taskContext'
import CompletedTasks from './components/CompletedTasks'
import PendingTask from './components/PendingTask'

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')
  const [editTaskIndex, setEditTaskIndex] = useState(null)

  const addTask = () => {
    if (!newTask.trim()) return

    if (editTaskIndex !== null) {
      const editedTask = tasks.map((task, i) => i === editTaskIndex ? { ...task, task: newTask } : task)
      setTasks(editedTask)
      localStorage.setItem('tasks', JSON.stringify(editedTask))
      setEditTaskIndex(null)
    } else {
      const newTime = new Date().toLocaleTimeString()
      const taskData = [...tasks, {
        task: newTask,
        time: newTime,
        tags: {
          pending: true,
          completed: false
        }
      }]

      setTasks(taskData)
      localStorage.setItem('tasks', JSON.stringify(taskData))

      setNewTask('')
    }
  }

  const completeTask = (index) => {
    // console.log('completed', index)

    const updatedTasks = tasks.map((task, i) =>
      i === index
        ? { ...task, tags: { pending: false, completed: true } }
        : task
    )
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const deleteTask = (index) => {
    // console.log('delete', index)

    const updatedTasks = tasks.filter((task, i) => i !== index)
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const editTask = (index) => {
    setNewTask(tasks[index].task)
    setEditTaskIndex(index)
  }

  return (
    <TaskContext.Provider
      value={{
        newTask,
        setNewTask,
        addTask,
        tasks,
        editTask,
        completeTask,
        deleteTask
      }}
    >
      <div className="task-manager-container">
        <div className="heading">
          <h1>task management</h1>
        </div>
        <TaskInput />
        <div className="main-container">
          <div className="tasks-filter">
            <button onClick={() => setFilter('all')}>all</button>
            <button onClick={() => setFilter('pending')}>pending</button>
            <button onClick={() => setFilter('completed')}>completed</button>
          </div>
          {
            filter === 'all'
              ? <TaskContainer />
              : filter === 'completed'
                ? <CompletedTasks />
                : <PendingTask />
          }
        </div>
      </div>
    </TaskContext.Provider>
  )
}
