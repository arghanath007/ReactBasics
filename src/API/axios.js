import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://driving-school-api1.herokuapp.com/v1/",
});

export default axiosInstance;
