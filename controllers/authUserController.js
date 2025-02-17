const AuthUserModel = require('../models/authUserModel')
const jwt = require('jsonwebtoken')

const JWT_SECRET = "kjhvhjgcycjcy"
const JWT_REFRESH_SECRET = "df61g5h61d5hd6f1g"

const register = async (req,res)=>{
    const {username,email,password}= req.body;
    try {
        const user = await AuthUserModel({username,email,password});
        await user.save();
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message:error})

    }
}
const login = async (req,res)=>{
    const {email,password}= req.body;
    try {
        const user = await AuthUserModel.findOne({email})
        if(!user)
            return res.status(404).json({message:"user not found"})
        const ismatch = await user.matchPassword(password)
        if(!ismatch)
            return res.status(401).json({message:"invalid credintials"})
        res.status(200).json({message:'login sucessfully'})
    } catch (error) {
        res.status(500).json({message:error})
    }
}
module.exports={register,login}
