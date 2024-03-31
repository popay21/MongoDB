const express = require('express');
const Task = require('../models/task');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  
});

router.get('/', authMiddleware, async (req, res) => {
  
});

router.patch('/:id', authMiddleware, async (req, res) => {
  
});

router.delete('/:id', authMiddleware, async (req, res) => {
  
});

module.exports = router;
