const http = require('http');
const test = require('./test')

const server = http.createServer((req, res) => {
    // res.end("this is my testing server ")
    // res.end(test.returnHello())
    res.end(test.secondreturnHello())
});

const port = 4000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})