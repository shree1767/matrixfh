import express from "express";
import mongoose from "mongoose";
import config from "../config";
import auth from "./routes/user"; // Ensure this path points to where your auth routes are located

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the auth routes
app.use("/api/auth", auth);

console.log(`mongodb uri ${config.mongo.uri}`);

mongoose.connect(config.mongo.uri)
    .then(() => {
        console.log("connected to mongoDB");
    })
    .catch((err) => {
        console.log("error connecting to mongoDB", err);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
