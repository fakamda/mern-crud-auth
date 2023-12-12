import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import AuthRoutes from './routes/auth.routes.js'
import TaskRoutes from './routes/tasks.routes.js'


const app =  express()

app.use(morgan('dev')) // morgan logger
app.use(express.json())
app.use(cookieParser())

app.use('/api', AuthRoutes)
app.use('/api', TaskRoutes)

export default app