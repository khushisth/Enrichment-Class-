const express = require('express');
const router = express.Router();
const attendanceController = require('../controller/');
const auth = require('../middlewares/auth.js');

// List all attendance
router.get('/', auth.isManagerOrAdmin, attendanceController.getAllAttendance);

// Get own attendance
router.get('/my-attendance', auth.isAuthenticated, attendanceController.getMyAttendance);

// Clock in
router.post('/clock-in', auth.isAuthenticated, attendanceController.clockIn);

// Clock out
router.post('/clock-out', auth.isAuthenticated, attendanceController.clockOut);

module.exports = router;
