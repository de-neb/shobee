import axios from "axios";

// baseURL: "https://my.api.mockaroo.com/v1/",
const instance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/",
    timeout: 0,
});

instance.interceptors.request.use(
    function (config) {
        // for mock api only
        config.headers["X-API-Key"] = "0ff33e30";
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
