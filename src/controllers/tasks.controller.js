import taskModel from "../models/user.model.js"


export const getTasks = async (req, res) => {
    const tasks = taskModel.find()
    res.json(tasks)
}

export const getTaskById = async (req, res) => {
    const task = await taskModel.findById(req.params.id)
    if(!task) return res.status(404).json({ message: "not found" })
    res.json(task)
}

export const createTask = async (req, res) => {
    const { title, description, date } = req.body

    const newTask = new taskModel({
        title, 
        description,
        date
    })

    const savedTask = await newTask.save()
    res.json(savedTask)
}

export const deleteTask = async (req, res) => {
    const task = await taskModel.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({ message: "not found" })
    res.json(task)

}

export const uptdateTask = async (req, res) => {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body , { new : true })
    if(!task) return res.status(404).json({ message: "not found" })
    res.json(task)
}