const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    link: { type: String, required: true }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
