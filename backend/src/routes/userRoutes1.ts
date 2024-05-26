import { Router } from 'express';
import { User } from '../models/User';
import { getUser, createUser, authenticate } from '../Controllers/user.controller';

const userRoute = () => {
    const router = Router();

    router.get('/users', async (req, res) => {
        getUser(req, res);
    });

    router.post("/signup", async(req, res) => {
        createUser(req, res)
    })

    router.post("/login", async (req, res) => {
        authenticate(req, res);
    })



    return router;
}


export { userRoute };