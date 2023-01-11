import axios from 'axios';

export * from './signInUp';
export * from './boards';
export * from './users';

export const baseApiUrl = 'https://olgad21-teamber-backend-production.up.railway.app/';

axios.interceptors.request.use((config) => ({
  ...config,
  headers: { ...config.headers, Authorization: `Bearer ${localStorage.getItem('token')}` },
}));
