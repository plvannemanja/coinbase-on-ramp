import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function useCryptoRampProviders(
  currency: string,
  mode: 'buy' | 'sell'
) {
  try {
    const response = await axios.get(`${API_BASE_URL}/providers`, {
      params: { currency, mode },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching providers:', error);
    throw error;
  }
}

// Add more API calls for other data fetching needs
