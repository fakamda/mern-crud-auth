import taskModel from "../models/tasks.model.js"


export const getTasks = async (req, res) => {
    try {
        const tasks = taskModel.find({
            user: req.user.id
        }).populate('user')
        
       return res.status(200).json(tasks)
    } catch (error) {
       return res.status(500).json({ message: 'Tasks Not Found' })
    }
  
}

export const getTaskById = async (req, res) => {
    try {
        const task = await taskModel.findById(req.params.id).populate('user')
        if(!task) return res.status(404).json({ message: "not found" })
        return res.status(200).json(task)
    } catch (error) {
       return  res.status(500).json({ message: 'task not found' })
    }
}
    

export const createTask = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("User ID:", req.user.id);
        const { title, description, date } = req.body
    
        const newTask = new taskModel({
            title, 
            description,
            date,
            user: req.user.id
        })
    
        const savedTask = await newTask.save()
        return res.json(savedTask)
    } catch (error) {
        return res.statu(500).json({ message: 'Server error' })
    }
   
}

export const deleteTask = async (req, res) => {
    try {
        const task = await taskModel.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).json({ message: "not found" })
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: "task not found" })
    }
    

}

export const uptdateTask = async (req, res) => {
    try {
        const task = await taskModel.findByIdAndUpdate(req.params.id, req.body , { new : true })
        if(!task) return res.status(404).json({ message: "not found" })
        return res.json(task)
    } catch (error) {
       return res.status(500).json({ message: 'task not found' })
    }
    
}