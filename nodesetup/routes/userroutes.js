import express from 'express'
import { createUser, deleteUser, getallUsers, getUserByid, updateUser } from '../controller/usercontroller.js';
import upload from '../middleware/multer.js';
const router = express.Router();

//router.get('/user',createUser)
router.post('/user',upload.single('image'),createUser)
router.get('/user',getallUsers)
router.get('/user/:id',getUserByid)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)
export default router;


