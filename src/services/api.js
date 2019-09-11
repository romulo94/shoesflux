import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_DEFAULT
      : process.env.REACT_APP_API,
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY,
  },
});

export default api;
