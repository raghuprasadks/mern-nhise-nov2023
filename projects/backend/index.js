const express = require('express')
const userRoute = require('./router/userRouter')
const cors = require('cors')

const app = express()

const port = 5000
app.use(cors())
app.use(express.json())
app.use("/api/user",userRoute)

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})