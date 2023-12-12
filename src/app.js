import express from 'express'
import morgan from 'morgan'

import AuthRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

const app =  express()

app.use(morgan('dev')) // morgan logger
app.use(express.json())
app.use(cookieParser())

app.use('/api', AuthRoutes)

export default app