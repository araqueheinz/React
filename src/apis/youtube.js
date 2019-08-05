import axios from 'axios';

const KEY = 'AIzaSyAiWrUUhK4DHBQWz-_DP14Gcy1XhkvzCHE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});

