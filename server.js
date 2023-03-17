const express=require("express");
const http=require("http");
const socketio=require("socket.io");
const cricLive = require('cric-live');

const app=express();
const server=http.createServer(app);

app.get("/",(req,res)=>{
    console.log("server working fine");
    res.send("server working fine")
})


server.listen(8000,()=>{
    console.log("server is running at 8000");
})

const io=socketio(server);

io.on("connection",(socket)=>{
    console.log("New Client Joined")
})


