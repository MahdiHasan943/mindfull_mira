// pages/api/dailyTrends.js

import googleTrends from 'google-trends-api';

export async function GET(req, res) {
  // Manually set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this to match your requirements
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  // Optional: Handle preflight requests for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { day } = req.query;
  if (!day) {
    return res.status(400).json({ error: 'Valid date is required' });
  }

  const trendDate = new Date(day);
  if (isNaN(trendDate.getTime())) {
    return res.status(400).json({ error: 'Valid date format required' });
  }

  try {
    const response = await googleTrends.dailyTrends({
      trendDate: trendDate,
      geo: 'US',
      category: 'Science',
    });

    const resultsJSON = JSON.parse(response);
    const data = resultsJSON["default"];
    if (!data.trendingSearchesDays || data.trendingSearchesDays.length === 0) {
      return res.status(404).json({ error: 'No data found for the selected day. Please select another day.' });
    }
    const dayData = data["trendingSearchesDays"][0];
    const searches = dayData["trendingSearches"];

    const detailedSearches = searches.map(search => ({
      searchTerm: search.title.query,
      traffic: search.formattedTraffic,
      imageUrl: search.image ? search.image.imageUrl : 'No image available',
      articles: search.articles.map(article => ({
        title: article.title,
        source: article.source,
        publishDate: article.timeAgo,
        url: article.url,
      })),
    }));

    res.status(200).json(detailedSearches);
  } catch (err) {
    console.error("Error fetching daily trends:", err);
    res.status(500).json({ error: 'An error occurred. Please try selecting another day.' });
  }
}
