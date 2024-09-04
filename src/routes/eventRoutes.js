const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/add', eventController.addEvent);

router.get('/', eventController.getAllEvent);

router.put('/:id', eventController.updateEvent);

router.delete('/:id', eventController.deleteEvent);

module.exports = router;