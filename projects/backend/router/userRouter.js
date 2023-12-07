const express = require('express')

const router = express.Router()


router.get("/",(req,res)=>{
    res.json({data:"welcome"}).status(200)
})

module.exports=router