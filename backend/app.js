import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import inquiryRoutes from "./routes/inquiryRoutes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


app.use("/api/inquiries", inquiryRoutes);

app.get("/", (req, res) => {
  res.send("Kyrex Inquiry API running");
});

export default app;
