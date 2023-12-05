const express = require('express')
const app = express()
const port = 8000

app.use((req,res,next)=>{
    console.log("request received at ",new Date())
    next()
})

app.get("/",(req,res)=>{
    console.log('get /')
    res.send("middleware demo")
})

app.get("/greeting",(req,res)=>{
    console.log("greetings ")
    res.send("greetings")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})