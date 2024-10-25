import axios from "axios";

const URL = "http://localhost:3001/";

const request = axios.create({
    baseURL: URL,
});

export default request;
export { URL };