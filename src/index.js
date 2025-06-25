import dotenv from "dotenv";
import connectDB from "./db/index.js"; // assumes you created connectDB()

// ✅ Load environment variables
dotenv.config({
  path: "./.env", // FIX: should be .env, not ./env
});

// ✅ Call DB connection function
connectDB()

.then(() =>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("error connection failed !!!",err)
})

// ✅ (Optional) Basic express setup here or inside connectDB
