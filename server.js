const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    console.log("server working fine");
    res.send("server working fine")
})


app.listen(8000,()=>{
    console.log("server is running at 8000");
})





