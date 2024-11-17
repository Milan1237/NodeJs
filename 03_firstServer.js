//accessing http
const http = require('http');

//creating a server
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end('hello world, please give her back');
}).listen(8080)