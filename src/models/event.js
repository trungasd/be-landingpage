const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    link: { type: String, required: true }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;