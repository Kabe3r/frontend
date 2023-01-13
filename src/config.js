import axios from 'axios';

export const axiosInstance = axios.create({
      baseURL: 'https://filthy-housecoat-dove.cyclic.app/api'
})