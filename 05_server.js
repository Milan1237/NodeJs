const fs = require('fs'); //file system
const http = require('http'); // to create http server
const path = require('path');// to handle path related operation
const port = 8000 ; //my custom path

//step 1 : creating the server
const server = http.createServer((req , res)=>{
    const filePath = path.join(__dirname , req.url == '/' ? 'index.html' : req.url) ; //accesing the current file + the requested url path. Which is finnally making  the file path of the request path

    const extName = String(path.extname(filePath).toLowerCase()); // accesing the extension name 

    // the supported extension type of our server
    const mimeType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'text/png'
    }

    //accessing the content type
    const contentType = mimeType[extName] || 'application/octet-stream' ; 

    //reading the file 

    fs.readFile(filePath ,(err , content)=>{
        if(err){
            if(err.code === 'ENOENT'){
                res.writeHead(404 , {'Content-Type': contentType});
                res.end('404: File not found Milan');
            }

        }else{
            res.writeHead(200 ,{'Content-Type': contentType});
            res.end(content , 'utf-8');
        }
    })
}) ; 



//step 2 : listening to the server 
server.listen(port ,()=>{
    console.log('server is listening on port');
})