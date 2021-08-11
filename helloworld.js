var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.end('Hello World\n');
}).listen(8124);

//port < 1024 needs sudo under Linux