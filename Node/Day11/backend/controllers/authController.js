//Login and Register

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    const{username, email, password} =reg.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({messgae:"User aleady exists"});
        }
        const hashedPassword = await bcrypt.hashedPassword(password, 12);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        const token =jwt.sign({id:newUser._id},process.env.jwt_secret)
        res.status(201).json({token});
    }catch(err){
        res.status(500).json({message:"Something went wrong"});
        console.error(err);
    }
}
    const token = await jwt.sign({id:newUser._id},process.env.jwt_secret);

export default register;