/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-06 20:55:53
 * @Description: 权限字典请求
 */
import { post } from "./axios";
export const manufactoryInsert = form => {
  return post("tzdmanufactory/insert", form);
};

export const manufactoryGetList = () => {
  return post("tzdmanufactory/getAuthInfoList");
};

export const manufactorySearch = id => {
  return post("tzdmanufactory/getAuthInfo", { id });
};

export const manufactoryDeleteById = id => {
  return post("tzdmanufactory/delById", { id });
};

export const manufactoryUpdate = form => {
  return post("tzdmanufactory/update", form);
};
