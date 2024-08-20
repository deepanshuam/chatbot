import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import userRouter from "./routes/user.route.js"; // Renamed to `userRouter` for clarity
import openaiRouter from "./routes/openai.route.js"; // Corrected the name
import bodyParser from "body-parser";
config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/chatbot", userRouter);
app.use("/api/openai", openaiRouter); // Use the correct import name

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
