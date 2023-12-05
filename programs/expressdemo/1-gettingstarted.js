

const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    console.log("get ")
    res.send('/- Welcome to express')
})

app.get("/greet",(req,res)=>{
    console.log("greet ")
    res.send('greet -greetings from express')
})



app.listen(8000,()=>{
    console.log('server started on port ',8000)
})