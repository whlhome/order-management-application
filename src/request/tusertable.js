/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-04 21:28:19
 * @Description: 用户字典请求
 */
import { post } from "./axios";
export const userMangerInsert = form => {
  return post("tusertable/insert", form);
};

export const userManagergetAuthInfoList = () => {
  return post("tusertable/getAuthInfoList");
};

export const userManagersearch = userId => {
  return post("tusertable/getAuthInfo", { userId });
};

export const userManagerdeleteById = userId => {
  return post("tusertable/delById", { userId });
};

export const userManagerUpdate = form => {
  form.auth_id = form.authId;
  return post("tusertable/update", form);
};
