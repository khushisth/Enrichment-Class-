import express from 'express'
import employeeRouter from './routes/employeeroute.js'
const app = express();
const PORT = 5000;
import connectDB from './config/database.js';
import authRouter from "./routes/auth.route.js"

app.use(express.json())

app.use('/api',employeeRouter);
app.use('/api/auth',authRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});