const express = require('express');
const router = express.Router();
const { getSessions } = require('../controllers/sessionController');
const authMiddleware = require('../middleware/authMiddleware');
router.get('/sessions', authMiddleware, getSessions);
module.exports = router;
