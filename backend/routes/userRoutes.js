const express = require('express');
const router = express.Router();

// TODO: Add user controllers and routes
router.get('/', (req, res) => {
  res.json({ message: 'User routes working' });
});

module.exports = router; 