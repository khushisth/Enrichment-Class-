const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller.js');
const authMiddleware = require('../middleware/verify.token.js');

// Register (Admin only)
router.post('/register', authMiddleware.isAdmin, authController.registerUser);

// Login (Public)
router.post('/login', authController.loginUser);

// Change Password (Authenticated)
router.post('/change-password', authMiddleware.isAuthenticated, authController.changePassword);

// Get My User Info (Authenticated)
router.get('/users/me', authMiddleware.isAuthenticated, authController.getCurrentUser);

module.exports = router;
