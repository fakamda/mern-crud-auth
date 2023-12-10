import express from 'express'
import morgan from 'morgan'

import AuthRoutes from './routes/auth.routes.js'

const app =  express()

app.use(morgan('dev')) // morgan logger
app.use(express.json())

app.use('/api', AuthRoutes)

export default app