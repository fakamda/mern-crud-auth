import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createTask, deleteTask, getTaskById, getTasks, uptdateTask } from "../controllers/tasks.controller.js";

const router = Router()

router.get('/tasks', authRequired, getTasks )
router.get('/tasks/:id', authRequired, getTaskById )
router.post('/tasks', authRequired, createTask )
router.delete('/tasks/:id', authRequired, deleteTask )
router.put('/tasks/:id', authRequired, uptdateTask )

export default router