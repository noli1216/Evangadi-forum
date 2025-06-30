import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://api.evanforum.com/api",
  // baseURL: "http://localhost:5500/api",
  baseURL: "https://evangadi-forum-backend-3-4jbv.onrender.com/api",
});

export default axiosInstance;
