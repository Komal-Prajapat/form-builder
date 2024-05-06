import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import userRouter from "./Router/user.js";
import bodyParser from "body-parser";
import cors from 'cors';
import { FormRouter } from "./Router/FormRouter.js";
// import FormRouter from "./Router/FormRouter.js";

const app = express();

// Load environment variables from .env file
config({
  path: ".env",
});

// Enable CORS middleware
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Body parser middleware
app.use(bodyParser.json());

// Router
app.use("/api", userRouter); 
app.use("/api", FormRouter); 
app.use("/", (req, res) => {
  res.end("Welcome");
});
// Database connection
mongoose
  .connect(process.env.MONGOURL, {
    dbName: "FormBuilder",
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(error => console.error("MongoDB connection error:", error));

// Setup server
const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
