import express from "express";
import cors from "cors";
import userRouter from "./router/userRouter.mjs";

const app = express()

const port = 5000
app.use(cors())
app.use(express.json())
app.use("/api/user",userRouter)

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})