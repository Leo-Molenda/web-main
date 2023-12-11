import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_DEV_API_URL
      : process.env.REACT_APP_PROD_API_URL,
});

export const setupInterceptors = (
  signOut: () => void,
  navigate: NavigateFunction,
) => {
  api.interceptors.response.use(
    async response => {
      // success
      return response;
    },
    async error => {
      const status = error.response?.status;

      if (status === 401) {
        signOut();
        navigate('/signin');
      }

      return await Promise.reject(error);
    },
  );
};

export default api;
