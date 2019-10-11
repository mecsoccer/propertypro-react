import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 49fba0ec563346e24414b490be0be0f0fd39f3e424ce02cc706fbc5edd940771',
      }
});
