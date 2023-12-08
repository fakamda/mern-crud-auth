import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mern-crud-app')
        console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
}

