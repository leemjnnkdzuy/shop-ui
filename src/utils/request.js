import axios from "axios";

let URL = "";

URL = "https://pixelshop-api-cf28d2825764.herokuapp.com/";

const request = axios.create({
    baseURL: URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    validateStatus: status => {
        return status >= 200 && status < 400;
    }
});

request.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            console.log('Unauthorized access');
        }
        return Promise.reject(error);
    }
);

export default request;
export { URL };
