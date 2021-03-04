import axios from 'axios';

const KEY = 'AIzaSyDpvI50ERFuNeW1w9ysc5dhqxZ4hNqnQ4g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
