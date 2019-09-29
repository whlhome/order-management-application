/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-06 20:55:46
 * @Description: 权限字典请求
 */
import { post } from "./axios";
export const packInsert = form => {
  return post("tzdpack/insert", form);
};

export const packGetList = () => {
  return post("tzdpack/getAuthInfoList");
};

export const packSearch = id => {
  return post("tzdpack/getAuthInfo", { id });
};

export const packDeleteById = id => {
  return post("tzdpack/delById", { id });
};

export const packUpdate = form => {
  return post("tzdpack/update", form);
};
