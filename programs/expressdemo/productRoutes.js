const express = require('express')

const routes = express.Router()

routes.get("/",(req,res)=>{
    res.send("product - get")
})

module.exports=routes