// todoRoutes.js
const express = require('express');
const router = express.Router();
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todocontroller');
const authMiddleware = require('../middleware/authMiddleware');
router.post('/todos', authMiddleware, createTodo);
router.get('/todos', authMiddleware, getTodos);
router.put('/todos/:id', authMiddleware, updateTodo);
router.delete('/todos/:id', authMiddleware, deleteTodo);
module.exports = router;