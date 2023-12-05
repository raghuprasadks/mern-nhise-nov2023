const http= require('http')

const server =http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('server received request')
    res.end('Hello from node server')
})

server.listen(8000,()=>{
    console.log('server started in port ',8000)
})