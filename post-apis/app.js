import express from "express";
const app = express();

const port = 4600;

//body data send middleware
app.use(express.json());


app.get("/", function (req, res) {
  res.send("Testing");
});

app.post("/test", (req, res) => {
    const bodyData=req.body;


    // res.json(bodyData);

    res.json({
        messsage:`The Second number is ${bodyData.firstNum*2}`
    })


//   res.json({
//     message: "post api is working",
//   });
});

app.post("/test/:multiply", (req, res) => {
    const bodyData=req.body;
    const mul=req.params.multiply;


    // res.json(bodyData);

    res.json({
        messsage:`The Second number is ${bodyData.firstNum*mul}`
    })


//   res.json({
//     message: "post api is working",
//   });
});

// port listen
app.listen(port, () => {
  console.info("Server is running on port 4600");
});
