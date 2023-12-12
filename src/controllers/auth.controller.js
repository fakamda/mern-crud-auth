import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js"
import userModel from "../models/user.model.js"

export const register = async (req, res) => {
    const { email, password, username } = req.body

    try {
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
    
        const userSaved = await newUser.save()
        const token = await createAccessToken({ id: userSaved._id })

        res.cookie('token', token)

        res.status(200).json({ 
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
         })
            
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
   
}

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const userFound = await userModel.findOne({ email })
        if(!userFound) return res.status(400).json({ message: "Invalid credentials" })

        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json({ message: "Invalid credentials" })

        const token = await createAccessToken({ id: userFound._id })

        res.cookie('token', token)

        res.status(200).json({ 
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
         })
            
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
   
}

export const logout = (req, res) => {
    res.cookie('token', "", { 
        expires: new Date(0) 
    })
    
    return res.send("logout")
}

export const profile = async(req, res) => {
    res.send('profile')
}