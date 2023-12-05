const express = require('express')
const app = express()
const port = 8000

const employees = [
    {
        id:1,
        name:'ravi',
        dept:'ISE',
        desg:'Lecturer',
        sal:70000
    },
    {
        id:2,
        name:'ramya',
        dept:'ISE',
        desg:'Lecturer',
        sal:70000
    }
]

app.get("/employee",(req,res)=>{
    res.send(employees)
})

app.get("/employee/:id",(req,res)=>{
    let filteredemployee = employees.filter((emp)=>emp.id ==req.params.id)
    res.send(filteredemployee)
})

app.listen(port,()=>{
    console.log('server is running on port ',port)
    console.log(`Server is running on port ${port}`)
})