const http = require('http');
const request = require('request');

request('https://google.com.sv', (err, response, body) => {
  console.log(body);
});

const server = http.createServer((req, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });

  response.end('Hello world');
});

server.listen(7000);
