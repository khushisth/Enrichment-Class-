import express from "express";
import { login } from "../usercontroller/auth.controller.js";
const router = express.Router();


router.post("/login", login);


export default router;

import express from 'express'
import { createEmployee, deleteemployee,  getallemployee,  getemployeeByid,  updateemployee } from '../usercontroller/employeecontroller.js';

const router = express.Router();

router.post('/addemployee',createEmployee)
router.get('/getemployee',getallemployee)
router.get('/employee/:employeeid',getemployeeByid)
router.put('/employee/:employeeid',updateemployee)
router.delete('/employee/:employeeid',deleteemployee)
export default router;
 