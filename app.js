const http = require('http');

const express = require('express');
const app = express();

// middleware 1 will consoellog but will not go the next muddkeware bcz it is stuck there
// next() will transfer the sequence of control to the next middleware
app.use((req,res,next)=>{
    console.log("I am middle ware 1 ...");
    next();
})

app.use((req,res,next)=>{
    console.log("I am middle ware 2 ...");
    res.send('<h1>HELLO FROM EXPRESS</h1>')
})

const server = http.createServer(app);

// server to listen at port 3000
server.listen(3000)