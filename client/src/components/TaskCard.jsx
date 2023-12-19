import { useTasks } from "../context/TasksContext"

function TaskCard() {

const { deleteTask } = useTasks()
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
       <header className="flex justify-between">
        <h3 className="text-2xl font-bold">{task.title}</h3>
        <div className="flex gap-x-2 items-center">
            <button onClick={()=> {deleteTask(task._id)}}>delete</button>
            <button>edit</button>
        </div>
       </header>
        <p className="text-slate-300">{task.description}</p>
        <p>{new Date(task.date).toLocaleDateString}</p>
    </div>
  )
}

export default TaskCard