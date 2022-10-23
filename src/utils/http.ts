//http.ts
import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import NProgress from "nprogress";
import type { ResType } from "@/types/http";

// 设置请求头和请求路径
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_PROXY;
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = window.sessionStorage.getItem("token");
    if (token && config.headers) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return error;
  }
);
// 响应拦截
axios.interceptors.response.use((res) => {
  return res;
});

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
};
export default http;
