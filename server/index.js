import express from "express";

import rootRouter from "./router/main.js";


const server = express();
const SERVER_PORT = 8000;

server.use(rootRouter);



rootRouter.get('*',(req,res)=>{
    return res.json({
        success: false,
        message: 'OOPs Something went wrong!'
    });
});

server.listen(SERVER_PORT,()=>{
    console.log(`server: http://localhost:${SERVER_PORT}`);
    
})