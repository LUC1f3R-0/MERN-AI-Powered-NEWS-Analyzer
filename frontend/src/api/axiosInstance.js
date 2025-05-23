import axios from 'axios';

const axios_instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
});

export default axios_instance;
