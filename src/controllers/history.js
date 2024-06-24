import user_spy from '../models/user_spy.js';

const History = async (req, res) => {
    const { username, query, date } = req.body;
  
    try {
      let user = await user_spy.findOne({ mail:username });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.searchHistory.push({ query, date });
      await user.save();
  
      res.send({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to update search history' });
    }
  }

export default History;