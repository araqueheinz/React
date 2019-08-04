// Import the Axios 3rd party package
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e1173c2e2609b2c76285fa636d353a6ac743954c592e008c6372cbb1952eb898',
  },
})
