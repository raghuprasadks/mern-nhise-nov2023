const http = require('http')
const fs = require('fs')

let port = 8000

const server = http.createServer((req,res)=>{

    console.log('request received')
    fs.readFile('info.txt',(err,data)=>{
        console.log('read file')
        if(err)
            console.log("error occured ",err)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
    console.log('after file reading function')
})

server.listen(port,()=>{
    console.log("server started in port ",port)
})