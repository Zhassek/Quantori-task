import axios from 'axios';

const API_URL = 'https://dummyjson.com/auth';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    
    const token = response.data.token;

    localStorage.setItem('authToken', token);

    return {
      user: response.data,
      token: token,
    };
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};