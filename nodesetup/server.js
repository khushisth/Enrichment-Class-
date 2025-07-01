import express from 'express'
import connectDB from './config/database.js';
import userRouter from './routes/userroutes.js'
const app = express();
const PORT = 5000;

app.get('/',(req, res)=>{
    res.send('hello, world!');
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("i'm your 1st response");
});

app.get("/about",(req,res)=>{
    res.send("I am from about from response")
});

app.use(express.json())

app.use('/api',userRouter);