import { useEffect } from 'react'
import { useTasks } from '../context/TasksContext'

function TasksPage() {
  const { getTasks, tasks } = useTasks()
  
  useEffect(()=> {
    getTasks()
  }, [])

  if(tasks.lenght === 0) return (<h2>No tasks</h2>)
  
  return <div >
    {
      tasks.map(task=>(
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))
    }
    </div>
}

export default TasksPage