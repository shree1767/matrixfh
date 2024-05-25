import { Request, Response } from "express";
import { User } from "../models/User";

const getUser = async (req, res) => {
    const users = await User.find().sort('-createdAt').exec();

    return res.status(200).json({data: users });
}

const createUser = async (req, res) => {
    const data = req.body;

    

    if(!req.body.username || !req.body.email || !req.body.phone || !req.body.password) {
        return res.status(422).json({
            message: "please fill all required fields"
        });
    }else {
        const user = new User(data);
        user.save();
        return res.status(201).json({
            message: "user created"
        })
    }
}


// util methods
// const IfDuplicate = async (username: string) => {
//     const username
// }


export { getUser,  };