const express = require('express');

const PORT = 3000;

const app = express(); // create  express server object

app.get('/home' , (req  ,res) => {
    res.send("hello world!");
})

app.post('/' , (req , res) => {

    res.json({
        message : 'ok'
    })
})

app.listen(PORT , () => {
     console.log(`Server set up at PORT ${PORT}`);
})