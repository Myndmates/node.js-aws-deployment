const express = require('express');

const app = express()


app.get('/api/get', (req, res)=>{
    res.send({message : "Node.js AWS deployment"})
})

app.listen(3002, (req, res)=>{
    console.log("server running at port 3002")
})

