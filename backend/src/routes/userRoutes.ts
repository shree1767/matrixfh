import { Router } from 'express';
import { User } from '../models/User';


const userRoute = () => {
    const router = Router();

    router.get('/users', async (req, res) => {
        const users = await User.find().sort('-createdAt').exec();

        return res.status(200).json({data: users });
    });

    router.post("/user", (req, res) => {
        
    })

    return router;

}


export { userRoute };