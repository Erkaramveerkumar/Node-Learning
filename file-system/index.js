import http from "node:http";
// import http from "http";
import fs from "node:fs";
// import htmlfile from "./static/index.html"

const port=4000;

const server=http.createServer((req,res)=>{
    res.end("Working completed");
    // fs.readFile('index.html', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    //   });
    
});

server.listen(port,()=>{
    console.log(`Server is Running on Port : ${port}`);
})