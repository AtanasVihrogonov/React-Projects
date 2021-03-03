import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID k0Iinj4mCZoM7yLAqDC75VMcjSn3_3k7-GSm4_OJvFY',
  },
});
