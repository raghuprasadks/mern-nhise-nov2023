const express = require('express')
const app = express()
const port = 8000
//middleware
app.use(express.json())

let employees = [
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

app.get("/employeebyname/:name",(req,res)=>{
    let filteredemployee = employees.filter((emp)=>emp.name ==req.params.name)
    res.send(filteredemployee)
})

app.delete("/employee/:id",(req,res)=>{
    employees=employees.filter((emp)=>emp.id != req.params.id)
    res.send(employees)
})

app.post("/employee",(req,res)=>{
    console.log("post method")
    let emp = req.body
    console.log("emp ::",emp)
    employees.push(emp)
    res.send(emp)
})

app.put("/employee/:id",(req,res)=>{
    console.log("put method")
    let emptoupd = req.body
    console.log("emp ::",emptoupd)
    employees = employees.map((emp)=>emp.id == req.params.id?emptoupd:emp)    
    //employees.push(emp)
    //employees=updemplist
    res.send(emptoupd)
})


app.listen(port,()=>{
    console.log('server is running on port ',port)
    console.log(`Server is running on port ${port}`)
})