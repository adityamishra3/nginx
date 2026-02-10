import express from "express";

const app = express();
const port = 3000
const server = process.env.SERVER || "Localhost:Default~"
app.use('/',(req,res)=>{
    res.send(`Hello, this is server ${server}`)
})

app.listen(port,()=>{
    console.log(`Node app is listening on port ${port}`)
})