import express from 'express'
import { createEmployee, deleteemployee,  getallemployee,  getemployeeByid,  updateemployee } from '../controller/employeecontroller.js';

const router = express.Router();

router.post('/addemployee',createEmployee)
router.get('/getemployee',getallemployee)
router.get('/employee/:employeeid',getemployeeByid)
router.put('/employee/:employeeid',updateemployee)
router.delete('/employee/:employeeid',deleteemployee)
export default router;
 