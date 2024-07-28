import axios from "axios";

const instance = axios.create({
    baseURL: "https://my.api.mockaroo.com/v1/",
    timeout: 0,
});

instance.interceptors.request.use(
    function (config) {
        config.headers["X-API-Key"] = "0ff33e30";

        console.log("config", config);

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
