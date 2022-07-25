import '@/config/http';
import axios from 'axios';

export const list = async () => {
  return await axios.get('/list');
};
