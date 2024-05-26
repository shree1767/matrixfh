import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "../config";
import { userRoute } from "./routes/userRoutes";
// import router from './routes/userRoutes';
import { Hash } from "./utils/hash";
import { hash } from "crypto";

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the auth routes
mongoose.connect(config.mongo.uri)
    .then(() => {
        console.log("connected to mongoDB");
    })
    .catch((err) => {
        console.log("error connecting to mongoDB", err);
    });

app.get("/", (req, res) => {
    res.json({ message: "welcome to the api" });
});

app.use("/api", userRoute());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
