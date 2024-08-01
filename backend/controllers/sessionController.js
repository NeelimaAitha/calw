const Session = require('../models/Session');

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.user.id });
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
