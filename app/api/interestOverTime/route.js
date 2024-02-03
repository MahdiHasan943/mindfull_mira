// pages/api/interestOverTime.js
import googleTrends from 'google-trends-api';

export default async function handler(req, res) {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required' });
  }

  try {
    const response = await googleTrends.interestOverTime({ keyword });
    const results = JSON.parse(response);
    res.status(200).json(results);
    console.log(results);
  } catch (error) {
    console.error('Error fetching Google Trends data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
