import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error:", error));

// routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

export default app; // 👈 VERY IMPORTANT
