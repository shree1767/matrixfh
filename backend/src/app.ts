import express from  "express";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import config from "../config";

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

console.log(`mongodb uri ${config.mongo.uri}`);

mongoose.connect(config.mongo.uri)
    .then (() => {
        console.log("connected to mongoDB");
    })
    .catch((err) => {
        console.log("error connecting to mongoDB", err);
    })


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});