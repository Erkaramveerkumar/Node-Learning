import http from 'http';

const server = http.createServer((request, response) => {
    const route = request.url;
    if (route === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello World\n test');
    } else if (route === '/json') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: 'Hello World' }));
    } else {
        // 404
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Page Not found\n');
    }
});

const port = 4500;

server.listen(port, function () {
    console.log(`Server running on port ${port}`);
})