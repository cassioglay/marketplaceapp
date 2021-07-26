import axios from 'axios';

// MAC OS -  baseURL: 'http://localhost:3000'
// Android -  baseURL: 'http://10.0.2.2:3000'
// Genimotion - baseURL: 'http://:10.0.3.2.3000'
// USB or others - baseURL: 'http://<Local IP>:3000'

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000'
});


export default api;