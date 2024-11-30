import axios from "axios";

const URL =
	process.env.REACT_APP_API_URL || "http://server-six-bay.vercel.app/";

const request = axios.create({
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	},
	withCredentials: true
});

// Add request interceptor
request.interceptors.request.use(
	config => {
		// Get token from storage
		const token = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default request;
export { URL };
