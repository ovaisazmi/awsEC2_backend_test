const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    console.log("server working 2");
    res.send("wlcome to server 2")
})


app.listen(8000,()=>{
    console.log("server is running at 8000");
})





