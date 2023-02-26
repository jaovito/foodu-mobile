import axios from 'axios';
import env from '../../.env.json';

export const api = axios.create({
  baseURL: env.REST_URL,
});
