const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const game = require('./gameplay.js');

const server = http.createServer( (request, response) => {
    const page = url.parse(request.url).pathname;
    const params = querystring.parse(url.parse(request.url).query);
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
        case '/api':
            if("userChoice" in params) {
                game.generateComputerChoice();
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(JSON.stringify(game.checkWhoWins(params["userChoice"])));
                response.end();
            }
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
