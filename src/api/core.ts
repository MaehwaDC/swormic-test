import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
