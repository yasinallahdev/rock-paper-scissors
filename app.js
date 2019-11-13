const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer( (request, response) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    switch(page) {
        case '/':
            fs.readFile("index.html", (error, data) => {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(data);
                response.end();
            })
            break;
        case '/css/style.css':
            fs.readFile("css/style.css", (error, data) => {
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(data);
                response.end();
            })
            break;
        case '/js/script.js':
            fs.readFile("js/script.js", (error, data) => {
                response.writeHead(200, {"Content-Type": "text/javascript"});
                response.write(data);
                response.end();
            })
            break;
        default:
            fs.readFile("error.html", (error, data) => {
                response.writeHead(404, {"Content-Type": "text/html"});
                response.write(data);
                response.end();
            })
            break;
    }
});

server.listen(3000);
