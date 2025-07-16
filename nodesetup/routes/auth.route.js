const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth');

// Register (Admin only)
router.post('/register', authMiddleware.isAdmin, authController.registerUser);

// Login (Public)
router.post('/login', authController.loginUser);

// Change Password (Authenticated)
router.post('/change-password', authMiddleware.isAuthenticated, authController.changePassword);

// Get My User Info (Authenticated)
router.get('/users/me', authMiddleware.isAuthenticated, authController.getCurrentUser);

module.exports = router;
