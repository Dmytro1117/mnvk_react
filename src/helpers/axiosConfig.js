import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

// axios.defaults.baseURL = 'https://mnvk-api-node-js.onrender.com/api';

export const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export const cleanAuthHeader = () =>
  (axios.defaults.headers.common.Authorization = '');

export default axios;
