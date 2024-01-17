import express from "express";
import cors from "cors";
import { config } from "dotenv";

const PORT = process.env.PORT || 5000;
const app = express();
config(); // To use .env variables

// Middlewares 
app.use(cors());

// Routes

app.listen(PORT, () => console.log(`Server is live ... ${PORT}`));