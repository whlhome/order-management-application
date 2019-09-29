/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-03 22:41:29
 * @Description: 权限字典请求
 */
import { post } from "./axios";
export const factoryInsert = form => {
  return post("tzdfactory/insert", form);
};

export const factoryGetList = () => {
  return post("tzdfactory/getAuthInfoList");
};

export const factorySearch = id => {
  return post("tzdfactory/getAuthInfo", { id });
};

export const factoryDeleteById = id => {
  return post("tzdfactory/delById", { id });
};

export const factoryUpdate = form => {
  return post("tzdfactory/update", form);
};
