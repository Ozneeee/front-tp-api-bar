import axios from "axios";

const api = axios.create({ baseURL: "http://192.168.1.70:8000" });

export { api };
