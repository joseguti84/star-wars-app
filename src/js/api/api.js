import axios from 'axios';

let defaultConfig = {
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    }
};

let axiosInstance = axios.create(defaultConfig);

export default axiosInstance;

