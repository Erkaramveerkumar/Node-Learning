import express from 'express';
const app=express();
const port=4600;
const thirdMiddleware=(req,res,next)=>{
    console.log('Third Middleware is called');
    next();
};

app.get('/',thirdMiddleware,(req,res)=>{
    res.send('Testing');
});


app.get('/error',(req,res)=>{
    // res.send('error');
    throw new Error('This is a my error');
});

app.get("/seconderr",(req,res,next)=>{
    try{
        console.log(b)
        // throw new Error('This is a second error');
    }catch(err){
        next(err);
    }
});

const firstMiddleware=(req,res,next)=>{
    console.log(req.query.apikey);
    console.log('First Middleware');
    next();
};
const secondMiddleware=(req,res,next)=>{
    console.log('second middleware is called');
    next();
};

const fourthMiddleware=(req,res,next)=>{
    console.log('Fourth Middleware is called');
    next();
};
const fifthMiddleware=(req,res,next)=>{
    console.log('Fifth Middleware is called');
    next();
};


app.get("/middleware-test",firstMiddleware,secondMiddleware,thirdMiddleware,fourthMiddleware,fifthMiddleware,(req,res)=>{
    res.send('Middleware test');
});


//error handling middleware
const handleError=(err,req,res,next)=>{
    // console.error('Error:',err);
    // res.status(500).send('Something went wrong');
    res.status(500).send(err.message);
};
app.use(handleError);
app.listen(port,()=>{
    console.info(`Server is running on port ${port}`);
});