import axios from "axios";

let URL = "";

const check = 1;

if (check === 1) {
    URL = "http://localhost:3001/";
} else {
    URL = "http://server-six-bay.vercel.app/";
}

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
