import axios from "axios";

const API = axios.create({
  baseURL: "https://skillsphere-90ee.onrender.com",
  withCredentials: true,
});

export default API; 