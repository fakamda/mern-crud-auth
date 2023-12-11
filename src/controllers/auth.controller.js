import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js"

export const register = async (req, res) => {
    const { email, password, username } = req.body

    try {
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

        console.log(newUser)
    
        const userSaved = await newUser.save()
        const token = await createAccessToken({ id: userSaved._id })
        res.cookie('token', token)

        res.status(200).json({ 
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,

         })
            
    
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error
            return res.status(400).json({ message: 'Email or username already exists' });
        }
        console.error(error);
        res.status(500).json({ message: error.message });
    }
   
}

export const login = (req, res) => {
    res.send('login')
}