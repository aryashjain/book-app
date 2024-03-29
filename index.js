import  express  from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";

import dotenv from "dotenv"


dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT
const app = express();
app.use(cookieParser())
app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// Importing routes
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"

 app.use("/Health",(req,res)=>res.send("OK"));
 app.use("/api/v1",bookRoute);
 app.use("/api/v1",userRoute);



connectDB().then(()=>{
    app.listen(PORT||8080, ()=>{
        console.log(`⚙️ Server is running at port : ${PORT}`); 
    })
})
