import Users from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req, res) => {
    const {username, password, confPassword} = req.body
    if(!username || !password || !confPassword) return res.status(400).json({msg: "All field are required!"})
    if(password !== confPassword) return res.status(400).json({msg: "Password and confirm password must be match!"})

    try {
        const checkDuplicateUsername = await Users.findAll({where: {username: username}})
        if(checkDuplicateUsername[0]) return res.status(409).json({msg: "Username is already taken!"})

        const hashPassword = await bcrypt.hash(password, 10)
        await Users.create({
            username: username,
            password: hashPassword,
        })
        return res.status(200).json({msg: "Create user successfuly!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Internal server error!"})
    }
}

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll()
        return res.status(200).json({
            ...users
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Internal server error!"})        
    }
}