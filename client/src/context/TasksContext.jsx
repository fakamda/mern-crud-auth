import { createContext, useContext, useState } from "react";
import { createTasksRequest, getTasksRequest, deleteTasksRequest, uptdateTasksRequest, getTaskRequest } from "../api/tasks";

const TaskContext = createContext()

export const useTasks = () => {
    const context = useContext(TaskContext)

    if(!context) {
        throw new Error("useTasks must be used within a TaskProvider")
    }

    return context
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
        } catch (error) {
            console.log(error)
        }
       
    }
    
    const getTaskById = async(id) => {
        const res = await getTaskRequest(id)
    }

    const createTask = async (task) => {
        try {
            const res = await createTasksRequest(task)

        } catch (error) {
            console.log(error)
        }
        
    }

    const deleteTask = async (id) => {
        try{
            const res = await deleteTasksRequest(id)
            if(res.status === 204) setTasks(tasks.filter(task => task._id !== id))

        } catch (error) {
            console.log(error)
        }

    }

    const updateTask = async (id) => {
        try{
            const res = await uptdateTasksRequest(id)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <TaskContext.Provider value={{tasks, getTasks, getTaskById, createTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}