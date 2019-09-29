/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-06 20:55:50
 * @Description: 权限字典请求
 */
import { post } from "./axios";
export const organInsert = form => {
  return post("tzdorgan/insert", form);
};

export const organGetList = () => {
  return post("tzdorgan/getAuthInfoList");
};

export const organSearch = authId => {
  return post("tzdorgan/getAuthInfo", { authId });
};

export const organDeleteById = authId => {
  return post("tzdorgan/delById", { authId });
};

export const organUpdate = form => {
  return post("tzdorgan/update", form);
};
