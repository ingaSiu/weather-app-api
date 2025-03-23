import axios from 'axios';

const API_BASE_URL = 'https://api.meteo.lt/v1/';

/**
 * Get available cities (in Lithuania) from API
 */

export const getCities = async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}places`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch city list.' });
  }
};
