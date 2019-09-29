/*
 * @Author: suzilong
 * @Date: 2019-03-18 14:20:32
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-17 21:44:58
 * @Description: 请求封装
 * @Copyright (c) 2018 CFCA [http://www.cfca.com.cn] All rights reserved.
 */
import axios from "axios";
import { showErrorToast } from "@/util/Toast";
import store from "@/store";
export const BASEURL = "";
let cancel;

/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */
// eslint-disable-next-line no-unused-vars
function obj2String(obj) {
  if (!obj) {
    return "";
  }
  let parameters = [];
  Object.keys(obj).forEach(key =>
    parameters.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
    )
  );
  const queryString = parameters.join("&");
  if (process.env.NODE_ENV == "development") {
    console.log("====================================");
    console.log("requestData:" + queryString);
    console.log("====================================");
  }

  return queryString;
}
// 基本设置
const service = axios.create({
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
  transformRequest: data => {
    console.log(data);
    return JSON.stringify(data);
  }
});

// POST传参序列化(添加请求拦截器)
service.interceptors.request.use(
  config => {
    store.dispatch("load/showLoading");
    if (cancel) {
      cancel(); // 先取消上次请求
      cancel = null;
    }
    return config;
  },
  error => {
    return Promise.reject(error.data.error.message);
  }
);

// 返回拦截
service.interceptors.response.use(
  response => {
    store.dispatch("load/hideLoading");
    const res = response.data;
    if (res.errorCode == null || res.errorCode == undefined) {
      return response.data;
    } else {
      return Promise.reject(res);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 封装get请求
 * @param {string} url
 * @param {JSON} param
 * @return {Promise}
 */
export function get(url) {
  return new Promise((resolve, reject) => {
    service({
      method: "get",
      url: url
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
}

/**
 * 封装post请求
 * @param {string} url
 * @param {JSON} param
 * @return {Promise}
 */
export function post(url, param) {
  return new Promise(resolve => {
    service({
      baseURL: `${BASEURL}/matermanger/`, //
      method: "post",
      url: url,
      data: param
    })
      .then(res => {
        if (process.env.NODE_ENV === "development") {
          console.warn(JSON.stringify(res));
        }
        store.dispatch("load/hideLoading");
        resolve(res);
      })
      .catch(error => {
        store.dispatch("load/hideLoading");
        if (error.errorMessage) {
          showErrorToast(error.errorMessage);
        } else {
          if (error.message) {
            showErrorToast(error.message);
          } else {
            showErrorToast("内部错误");
          }
        }
      });
  });
}
