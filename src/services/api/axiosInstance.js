import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
});

axiosInstance.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => res,

  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
