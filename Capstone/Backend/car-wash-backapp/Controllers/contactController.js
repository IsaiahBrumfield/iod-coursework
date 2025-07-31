const Contact = require('../Models/contact');

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Contact message received' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message' });
  }
};
