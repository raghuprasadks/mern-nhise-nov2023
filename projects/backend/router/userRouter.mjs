import express from "express";
import db from "../db/dbconnection.mjs";
import { ObjectId } from "mongodb";
const userRouter = express.Router();


userRouter.get("/",(req,res)=>{
    res.json({data:"welcome"}).status(200)
})
userRouter.post("/", async (req, res) => {
    let collection = await db.collection("user");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send({data:result}).status(204);
  });
  
  export default userRouter;