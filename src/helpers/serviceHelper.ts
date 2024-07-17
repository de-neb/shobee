import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    timeout: 0,
});

axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
