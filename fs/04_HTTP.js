const http = require('http');
const path = require('path');
const fs = require('fs');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url == '/' ? 'Index.html' : req.url)
    const extName = path.extname(filePath);

    const mimeType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/js',
        '.png': 'text/png'
    }

    const contentType = mimeType[extName] || 'application/octet'

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, {
                'Content-Type': contentType
            });
            res.end('404: File not found Milan');
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(content, 'utf-8');
        }
    })

})

server.listen(port , hostName , ()=>{
    console.log('server listening on ' , port , hostName)
} )