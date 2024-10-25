const express = require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Challa get request");
})

app.post('/post',(req,res)=>{
    res.send("Post request challa");
})

app.put('/put/:id',(req,res)=>{
    res.send(`Put request aa gyi `);
})

app.delete('/delete/:id',(req,res)=>{
    res.send(`Delete request challi `);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})