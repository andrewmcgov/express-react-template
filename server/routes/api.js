const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'Successfully reached the API.' });
});

module.exports = router;
