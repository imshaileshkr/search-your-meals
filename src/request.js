import axios from "axios";
const service = axios.create({
  baseURL: "https://themealdb.com/api/json/v1/1",
  timeout: 30000,
});

export default service;
