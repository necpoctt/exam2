import axios from 'axios';

const SERVER_URL = 'https://avl-frontend-exam.herokuapp.com/api';

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'text/plain',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default axiosInstance;
