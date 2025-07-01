import express from 'express'
import { createUser } from '../usercontroller/usercontroller.js';

const router = express.Router();

//router.get('/user',createUser)
const userRouter = router.post('/adduser',createUser)
export default userRouter;