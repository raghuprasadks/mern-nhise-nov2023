const express = require('express')

const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')

const app = express()
const port = 8000

// middleware

app.use("/api/users",userRoutes)
app.use("/api/products",productRoutes)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})