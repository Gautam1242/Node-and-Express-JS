const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

// creation of a middleware
const logMiddleware = function(req,res,next){
    console.log("Logging middleware");
    next();
}
// loading the middleware
app.use(logMiddleware);

// creation of a middleware
const authMiddleware = function(req,res,next){
    console.log("Authetication middleware");
    res.send("Chalo seedha GHAR");
    // next();
}
// loading the middleware
app.use(authMiddleware);

// creation of a middleware
const validateMiddleware = function(req,res,next){
    console.log("Validation");
    next();
}
// loading the middleware
app.use(validateMiddleware);

app.get('/',(req,res)=>{
    console.log("Mai route handler hu!!!!!");
    res.send("Chala get request");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})