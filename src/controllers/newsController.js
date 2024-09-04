const News = require('../models/news');

// Add a new news
exports.addNews = async (req, res) => {
  const { title, image, content, link } = req.body;

  try {
    const newNews = new News({ title, image, content, link });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    res.status(400).json({ message:'Error adding news', error });
  }
};

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a news
exports.updateNews = async (req, res) => {
  const { title, image, content, link } = req.body;

  try {
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      { title, image, content, link },
      { new: true }
    );

    if (!updatedNews) return res.status(404).json({ message: 'News not found' });

    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a news
exports.deleteNews = async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);

    if (!deletedNews) return res.status(404).json({ message: 'News not found' });

    res.json({ message: 'News deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
