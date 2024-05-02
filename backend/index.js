import ConnectDB from "./DB/index.js";
import express from "express";
const app = express();

ConnectDB()
.then(
    app.listen(3100,()=>{
        console.log("app is running successfully")
    })
)
.catch((error) => {
   console.log("connection Faild : ", error)
})