const express=require('express');
const app=express();
require('dotenv').config();

app.get('/',(req,res)=>{
    res.send({msg:"Root URL"});
});

app.post('/auth',(req,res)=>{
    res.send({msg:"Auth"});
})

app.delete('/delete',(req,res)=>{
    res.send({msg:"delete"});
})
app.put('/put',(req,res)=>{
    res.send({msg:"Put url"});
})

app.listen(process.env.PORT,()=>{
    console.log("Running");
});