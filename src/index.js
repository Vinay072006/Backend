import dotenv from "dotenv";
import connectDB from "./db/index.js"; // assumes you created connectDB()

// ✅ Load environment variables
dotenv.config({
  path: "./.env", // FIX: should be .env, not ./env
});

// ✅ Call DB connection function
connectDB();

// ✅ (Optional) Basic express setup here or inside connectDB
