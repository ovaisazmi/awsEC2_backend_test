const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    console.log("server working 1");
    res.send("wlcome to server 1")
})
app.get("/home",(req,res)=>{
    res.send("home server 1")
})


app.listen(8000,()=>{
    console.log("server is running at 8000");
})





