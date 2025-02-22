// import http from "http"
// http.createServer((req,res)=>{
//     res.end("test");
// }).listen(4200,()=>{
//     console.log("server is running on 6000")
// });

import express from "express";
const app= express();
const port=4500;

app.get("/",(req,res)=>{
    res.send("my server is woring");
});

app.get("/about",(req,res)=>{
    res.send("this is my about page");
});

app.get("/json",(req,res)=>{
    // res.send("this is my about page");
    res.json({
        statusCode:401,
        status:"error",
        message:"Something went wrong!",
    });
    // res.json({
    //     statusCode:200,
    //     status:"success",
    //     message:"student data get Successfully!",
    //     data:[
    //         {
    //             id:1,
    //             name:"student name",
    //             grade:"studnet grade",
    //             board:"board",
    //             age:6
    //         },
    //         {
    //             id:2,
    //             name:"student name",
    //             grade:"studnet grade",
    //             board:"board",
    //             age:6
    //         },
    //         {
    //             id:3,
    //             name:"student name",
    //             grade:"studnet grade",
    //             board:"board",
    //             age:6
    //         },
    //         {
    //             id:4,
    //             name:"student name",
    //             grade:"studnet grade",
    //             board:"board",
    //             age:6
    //         },
    //         {
    //             id:5,
    //             name:"student name",
    //             grade:"studnet grade",
    //             board:"board",
    //             age:6
    //         },
    //         {
    //             id:6,
    //             name:"student name",
    //             grade:"studnet grade",
    //             board:"board",
    //             age:6
    //         },
    //     ]
    // });
});

app.listen(port,()=>{
    console.log("Server is running on port: ",port);
})