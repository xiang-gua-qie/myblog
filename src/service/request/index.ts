import axios from "axios";
import type { AxiosInstance } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";

class HYRequest {
  instance: AxiosInstance;
  interceptors?: HYRequestInterceptors | any;

  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.interceptors = config.interceptors;

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("所有的实例都有的拦截器: 请求成功拦截");

        return config;
      },
      (err) => {
        // console.log("所有的实例都有的拦截器: 请求失败拦截");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // console.log("所有的实例都有的拦截器: 响应成功拦截");

        const data = res.data;

        return data;
      },
      (err) => {
        // console.log("所有的实例都有的拦截器: 响应失败拦截");

        return err;
      }
    );
  }

  request<T>(config: HYRequestConfig) {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }

          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }
  // get(config) {
  //   return this.request({ ...config, method: "GET" });
  // }

  // post(config) {
  //   return this.request({ ...config, method: "POST" });
  // }

  // delete(config) {
  //   return this.request({ ...config, method: "DELETE" });
  // }

  // patch(config) {
  //   return this.request < T > { ...config, method: "PATCH" };
  // }
}

export default HYRequest;
