import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import paperRoutes from "./routes/paperRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

dotenv.config();
connectDB();

const PORT = process.env.PROT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("API is running");
})

app.use("/api/auth", authRoutes);
app.use("/api/papers", paperRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(PORT , ()=>{
   console.log(`Server running on port ${PORT}`);
})