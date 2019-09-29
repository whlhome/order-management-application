/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-06 20:55:56
 * @Description: 权限字典请求
 */
import { post } from "./axios";
export const departInsert = form => {
  return post("tzddepart/insert", form);
};

export const departGetList = () => {
  return post("tzddepart/getAuthInfoList");
};

export const departSearch = deptId => {
  return post("tzddepart/getAuthInfo", { deptId });
};

export const departDeleteById = deptId => {
  return post("tzddepart/delById", { deptId });
};

export const departUpdate = form => {
  return post("tzddepart/update", form);
};
