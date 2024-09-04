const Event = require('../models/event');

exports.addEvent = async (req, res) => {
    const { title, image, content, link } = req.body;

    try {
        const newEvent = new Event({ title, image, content, link });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: 'Error adding event', error });
    }
};

exports.getAllEvent = async (req, res) => {
    try {
        const event = await Event.find();
        res.json(event);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEvent = async (req, res) => {
    const { title, image, content, link } = req.body;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            { title, image, content, link },
            { new: true }
        );

        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });

        res.json(updatedEvent);
    }catch(error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);

        if (!deletedEvent) return res.status(404).json({ message: 'Event not found' });

        res.json({ message: 'Event deleted' });
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}
