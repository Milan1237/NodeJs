const fs = require('fs');
const http = require('http');
const { json } = require('stream/consumers');

http.createServer((req , res)=>{
    fs.readFile('./prac.html' , (err , data)=>{
        if(err){
            console.log(err);
        }else{
            res.writeHead(200 ,{'Content-Type': 'Text/html'} );
            // res.write(data);
            res.end(data , 'utf-8');
        }
    })
}).listen(8000);