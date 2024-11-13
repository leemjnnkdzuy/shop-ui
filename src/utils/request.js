import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:3001/";

const request = axios.create({
    baseURL: URL,
});

export default request;
export { URL };