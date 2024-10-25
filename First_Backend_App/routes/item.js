// this file will contain all the item specific routes
const express=require('express');
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Challa get request");
})

router.post('/post',(req,res)=>{
    res.send("Post request challa");
})

router.put('/put/:id',(req,res)=>{
    res.send(`Put request aa gyi `);
})

router.delete('/delete/:id',(req,res)=>{
    res.send(`Delete request challi `);
})

module.exports=router