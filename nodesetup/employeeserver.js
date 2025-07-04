import express from 'express'
import employeeRouter from './routes/employeeroute.js'

const app = express();
const PORT = 5000;
import connectDB from './config/database.js';

app.get('/',(req, res)=>{
    res.send('hello, world!');
});


app.get("/",(req,res)=>{
    res.send("i'm your 1st response");
});

app.get("/about",(req,res)=>{
    res.send("I am from about from response")
});

connectDB()

app.use(express.json())

app.use('/api',employeeRouter);


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});