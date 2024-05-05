import ConnectDB from "./DB/index.js";
import cors from 'cors'
import "dotenv/config";
import express from "express";
const app = express();

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

ConnectDB()
.then(
    app.listen(process.env.PORT || 7000 ,()=>{
        console.log("app is running successfully")
    })
)
.catch((error) => {
   console.log("connection Faild : ", error)
})

app.post("/signup", async (req, res) => {
  try {
    console.log("backend", req.body);
    // Validation and saving to the database logic here (similar to previous examples)
    res.status(201).json({ message: "User signed up successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});