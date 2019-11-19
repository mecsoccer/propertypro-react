const axios = require('axios');

const axiosInstance = axios.create({
    //baseURL: 'https://serene-acadia-52622.herokuapp.com/api/v1',
    baseURL: 'http://localhost:8000/api/v1',
});

export default axiosInstance;
