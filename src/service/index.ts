// service统一出口
import HYRequest from "./request";
import apiMap from "../api/config";

const SERVER = new HYRequest({
  baseURL: "http://localhost:5173",
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config: any) => {
      console.log(config, "configconfigconfig");

      // 携带token的拦截
      const token = "";
      if (token) {
      }
      return config;
    },
    requestInterceptorCatch: (err: any) => {
      return err;
    },
    responseInterceptor: (res: any) => {
      return res;
    },
    responseInterceptorCatch: (err: any) => {
      return err;
    },
  },
});

const service = (key: any, data = {}, config = {}) => {
  const { url, type } = apiMap(key);
  const obj = {
    url: url,
    method: type,
    ...data,
    ...config,
  };
  return SERVER.request(obj);
};

export default service;
