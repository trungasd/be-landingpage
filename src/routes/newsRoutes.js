const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Add a new news
router.post('/add', newsController.addNews);

// Get all news
router.get('/', newsController.getAllNews);

// Update a news
router.put('/:id', newsController.updateNews);

// Delete a news
router.delete('/:id', newsController.deleteNews);

module.exports = router;
