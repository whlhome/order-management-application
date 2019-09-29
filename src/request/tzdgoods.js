/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-20 21:31:01
 * @Description: 商品字典请求
 */
import { post } from "./axios";
export const goodsInsert = form => {
  return post("tzdgoods/insert", form);
};

export const goodsGetList = () => {
  return post("tzdgoods/getPlanInfoList");
};

export const goodsSearch = auth_id => {
  return post("tzdgoods/getAuthInfo", { auth_id });
};

export const goodsDeleteById = (materialCode, organCode, id) => {
  return post("tzdgoods/delById", { materialCode, organCode, id });
};

export const goodsUpdate = form => {
  return post("tzdgoods/update", form);
};

export const goodsPylist = form => {
  return post("tzdgoods/getpylist", form);
};
