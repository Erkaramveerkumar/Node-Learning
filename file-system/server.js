import http from "http";
http.createServer((req,res)=>{
    if(req.url=="/about"){
        res.end("<h1>This is about page</h1>")
    }else{
        res.end("working!");
    }
}).listen(4500);