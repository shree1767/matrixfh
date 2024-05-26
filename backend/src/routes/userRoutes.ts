import express, { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {User} from '../models/User';

interface SignupRequestBody {
  username: string;
  email: string;
  password: string;
  phone: string;
  age: number;
  balance: number;
}

interface LoginRequestBody {
  email: string;
  password: string;
}
const userRoute = () => {
  const router = express.Router();

  router.get(
    "/users",
    async (req: Request, res: Response) => {
      try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
        console.error(err);
        res.status(500).json({
          message: "Server Error",
        });
      }
    }
  );

  router.get("/users/:id", async (req, res) => {
    try {
      const users = await User.findOne({"_id":req.params.id}).then((value) => {
        return {"username": value.username, "fullname": value.fullname, "balance" : ((value.balance) ? value.balance : 0)};
      })

      res.status(200).json(users);

    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Server Error",
      });
    }

  });
  
  router.post(
    "/signup",
    [
      check("username", "Please Enter a Valid Username").not().isEmpty(),
      check("fullname", "Please Enter a Valid Name").not().isEmpty(),
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({ min: 6 }),
      check("phone", "Please Enter a Valid Phone_no").not().isEmpty(),
      check("age", "Please Enter a Valid age").not().isEmpty(),
    ],
    async (req: Request<{}, {}, SignupRequestBody>, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
  
      const { username, fullname,email, phone,age,password } = req.body;
      try {
        let user = await User.findOne({
          email,
        });
        if (user) {
          return res.status(400).json({
            msg: "User Already Exists",
          });
        }
  
        user = new User({
          username,
          fullname,
          email,
          phone,
          age,
          password,
        });
  
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
  
        await user.save(); //this is where user getting registered
  
        const payload = {
          user: {
            id: user.id,
          },
        };
  
        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 10000,
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
            });
          }
        );
      } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
      }
    }
  );
  
  router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({ min: 6 }),
    ],
    async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
  
      const { email, password } = req.body;
      try {
        let user = await User.findOne({
          email,
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist",
          });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password!",
          });
  
        const payload = {
          user: {
            id: user.id,
          },
        };
  
        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error",
        });
      }
    }

  );
  return router;
}


export { userRoute };