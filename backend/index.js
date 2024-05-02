import ConnectDB from "./DB/index.js";
import "dotenv/config";
import express from "express";
const app = express();

ConnectDB()
.then(
    app.listen(process.env.PORT || 7000 ,()=>{
        console.log("app is running successfully")
    })
)
.catch((error) => {
   console.log("connection Faild : ", error)
})