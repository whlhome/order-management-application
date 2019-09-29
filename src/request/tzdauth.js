/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-01 14:05:34
 * @Description: 权限字典请求
 */
import { post } from "./axios";
export const authInsert = form => {
  return post("tzdauth/insert", form);
};

export const getAuthInfoList = () => {
  return post("tzdauth/getAuthInfoList");
};

export const search = auth_id => {
  return post("tzdauth/getAuthInfo", { auth_id });
};

export const deleteById = auth_id => {
  return post("tzdauth/delById", { auth_id });
};

export const update = form => {
  form.auth_id = form.authId;
  return post("tzdauth/update", form);
};
