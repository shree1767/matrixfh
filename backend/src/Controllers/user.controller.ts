import { Request, Response } from "express";
import { User } from "../models/User";
import { compare } from "../utils/hash";

const getUser = async (req, res) => {
    const users = await User.find().sort('-createdAt').exec();

    return res.status(200).json({data: users });
}

const createUser = async (req, res) => {
    const data = req.body;

    if(!req.body.username || !req.body.email || !req.body.phone || !req.body.password || !req.body.fullname) {
        return res.status(422).json({
            message: "please fill all required fields"
        });
    }else if (IfDuplicate){
        return res.status(409).json({
            message: "username or email already exist"
        });
    }
    else {
        const user = new User(data);
        user.save();
        return res.status(201).json({
            message: "user created"
        })
    }
}

const authenticate = async (req, res) => {
    const {username, password} = req.body;

    const hash = await User.findOne({"username": username}).get("password");

    const comp = compare(password, hash);
    if(comp){
        return res.status(200).json({
            message: "login successful"
        });
    }
}


// util methods
const IfDuplicate = async (username: string) => {
    const result = User.findOne({"username": username});
    if(result === null){
        return false;
    }else {
        return true;
    }
}


export { getUser, createUser, authenticate };