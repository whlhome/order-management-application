/*
 * @Author: suzilong
 * @Date: 2019-03-27 17:23:11
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-01 13:22:15
 * @Description: 封装弹出框
 * @Copyright (c) 2018 CFCA [http://www.cfca.com.cn] All rights reserved.
 */
import Vue from "vue";
export const showSuccessToast = message => {
  Vue.toasted.show(message, {
    /* some option */
    type: "success"
  });
};

export const showWarnToast = message => {
  Vue.toasted.show(message, {
    /* some option */
    type: "info"
  });
};

export const showErrorToast = message => {
  Vue.toasted.show(message, {
    /* some option */
    type: "error",
    duration: 4000
  });
};
