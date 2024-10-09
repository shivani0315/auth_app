const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const { getUserInfo } = require('../controllers/userController');
const router = express.Router();

router.get('/me', verifyToken, getUserInfo);

module.exports = router;
