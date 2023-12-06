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
    res.json({"statusCode":201,"data":asainmedal})
})

app.get("/asiangames",(req,res)=>{
    res.json({"statusCode":200,"data":medallist})
})

app.get("/asiangames/:country",(req,res)=>{
    let countrytosearch = req.params.country
    let medallistbycountry =medallist.filter((medals)=>medals.country ==countrytosearch)
    res.json({"statusCode":200,"data":medallistbycountry})
})



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

