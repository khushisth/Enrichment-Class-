import express from 'express'
import employeeRouter from './routes/employeeroute.js'
const app = express();
const PORT = 5000;
import connectDB from './config/database.js';
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/userroutes.js"
import { verifyUser } from './middleware/verify.token.js';
// import {profileMiddleWare} from "./middleware/middleware.js"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',employeeRouter);
app.use('/api/auth',authRouter);
app.use('/api',userRouter) 

import nodemailer from "nodemailer";

app.post('/send-email', async (req, res) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'np05cp4a240249@iic.edu.np',
        pass: 'wufv znjh ceqh ljge'
      }
    });

    // Email options
    const mailOptions = {
      from: 'np05cp4a240249@iic.edu.np',
      to: 'khushistha@gmail.com',
      subject: 'Test Email from Node.js',
      text: 'Hello! This is a test email sent using Nodemailer and Node.js.',
      html: '<p>Hello! This is a <b>test email</b> sent using <i>Nodemailer</i> and Node.js.</p>'
    };

    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Error:', error);
      }
      console.log('Email sent:', info.response);
    });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
app.get('/check',verifyUser,(req,res)=>{
    res.status(200).json({message:""})
})