const express = require('express')
const  url = require('url')

const app = express()
const port = 8000
let products = []

app.use(express.json())

app.post("/products",(req,res)=>{
    let product = req.body
    products.push(product)
    res.json({"responseCode":201,"data":product})
})

app.get("/products",(req,res)=>{
    
    res.json({"responseCode":200,"data":products})
})

app.get("/productsbysupplier/:supplier",(req,res)=>{
    let supplier = req.params.supplier
    let productsbysupplier =products.filter((product)=>product.supplier == supplier)
    res.json({"data":productsbysupplier})
})

app.get("/productsbypricerange",(req,res)=>{
   console.log("url " ,req.url)
   var q = url.parse(req.url, true).query;
    var txt = q.min + " " + q.max;
    console.log(txt)
    let productsbypricerange =products.filter((product)=>product.price >= q.min && product.price<=q.max)
    res.json({"data":productsbypricerange})
})
app.listen(port,()=>{
    console.log(`server has started in port ${port}`)

})