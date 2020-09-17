import axios from 'axios';

let defaultConfig = {
    baseURL: 'https://swapi.dev/api',
    headers: {
        'Content-Type': 'application/json',
    }
};

let axiosInstance = axios.create(defaultConfig);

export default axiosInstance;

