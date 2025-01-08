import axios from "axios";

const api = axios.create({ baseURL: "http://192.168.1.70:8000" });

// api.interceptors.request.use(
//   async (config) => {
//     const jsonValue = await AsyncStorage.getItem("token");
//     if (jsonValue !== null) {
//       const token = JSON.parse(jsonValue);
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export { api };
