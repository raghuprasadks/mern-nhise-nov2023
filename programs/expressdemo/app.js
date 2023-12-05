const express = require('express')
const cors = require('cors')

const app = express()
const port = 8000
let medallist=[]

app.use(cors())
app.use(express.json())

app.post("/asiangames",(req,res)=>{
    let asainmedal = req.body
    medallist.push(asainmedal)
    res.json({"statusCode":201,"data":medallist})
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

