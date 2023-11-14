import axios from "axios";


const authApi = axios.create({
    baseURL: '/api/v1/auth',
    withCredentials: true,
});

export default authApi;