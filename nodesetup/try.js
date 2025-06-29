const express = require('express');
const app = express();
const PORT = 9000;

app.get('/',(req, res)=>{
    res.send('hello, world!. I am khushi shrestha.');
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});
