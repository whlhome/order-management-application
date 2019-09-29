/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-17 21:36:57
 * @Description: 权限字典请求
 */
import { post } from "./axios";
export const planpagenoGetno = form => {
  return post("planpageno/getno", form);
};

export const PurchasePlanMainList = form => {
  return post("PurchasePlan/insertList", form);
};
//yjs20190926
export const PurchasePlanDetailid = form => {
  return post("PurchasePlanDetail/delByIdList", form);
};
export const PurchasePlanDelByIdlist = form => {
  return post("PurchasePlan/delByIdlist", form);
};

export const planpagenoInsertList = form => {
  return post("PurchasePlanDetail/insertList", form);
};

export const planpagenoUpdate = form => {
  return post("PurchasePlan/update", form);
};

export const planpagenodelById = form => {
  return post("tintendpurchaseplandetail/delById", form);
};

export const planpagenoUpdateItem = form => {
  return post("tintendpurchaseplandetail/update", form);
};

export const purchasePlanGetPlanInfoonemon = form => {
  return post("PurchasePlan/getPlanInfoonemon", form);
};

export const purchasePlanUpdate = form => {
  return post("PurchasePlan/update", form);
};
