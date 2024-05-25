const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute"); // Adjust path as needed

const { MONGO_URL, PORT } = process.env;

if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in .env file");
  process.exit(1);
}

if (!PORT) {
  console.error("PORT is not defined in .env file");
  process.exit(1);
}

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

app.listen(PORT, (err) => {
  if (err) {
    console.error("Server start error:", err);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", AuthRoute);
