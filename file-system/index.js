import http from "node:http";
// import http from "http";
import fs from "node:fs";
import path from "node:path";
// import htmlfile from "./static/index.html"

const port=4000;

const server=http.createServer((req,res)=>{
    // res.end("Working completed");
const __dirname=path.resolve();
    // console.log(__dirname)
    fs.readFile(`${__dirname}/static/index.html`, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    
    
});

server.listen(port,()=>{
    console.log(`Server is Running on Port : ${port}`);
})