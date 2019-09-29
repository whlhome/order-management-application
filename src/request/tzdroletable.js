/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-06 20:55:42
 * @Description: 权限字典请求
 */
import { post } from "./axios";
export const roleInsert = form => {
  return post("tzdroletable/insert", form);
};

export const roleGetList = () => {
  return post("tzdroletable/getRoleInfoList");
};

export const roleSearch = roleCode => {
  return post("tzdroletable/getAuthInfo", { roleCode });
};

export const roleDeleteById = roleCode => {
  return post("tzdroletable/delById", { roleCode });
};

export const roleUpdate = form => {
  return post("tzdroletable/update", form);
};
