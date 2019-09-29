/*
 * @Author: suzilong
 * @Date: 2019-08-31 21:46:42
 * @Last Modified by: suzilong
 * @Last Modified time: 2019-09-24 22:25:11
 * @Description: 权限字典请求
 */
import { post } from "./axios";

export const PurchasesumPlanMainList = form => {
  return post("PurchasesumPlan/insertList", form);
};

export const PurchasesumPlanInsertList = form => {
  return post("PurchasePlanDetailsum/insertList", form);
};

export const PurchasePlanDetailgetPlanDetailbyno = form => {
  return post("PurchasePlanDetail/getPlanDetailbyno", form);
};

export const PurchasePlanCustGetlist = form => {
  return post("PurchasePlanCust/getlist", form);
};

export const PurchasesumPlanUpdate = form => {
  return post("PurchasesumPlan/update", form);
};

export const PurchasesumPlanGetPlanInfo = form => {
  return post("PurchasesumPlan/getPlanInfo", form);
};

export const PurchasePlanDetailsumSelectpagenogetpc = form => {
  return post("PurchasePlanDetailsum/selectpagenogetpc", form);
};

export const PurchasePlanDetailsumInsertList = form => {
  return post("PurchasePlanDetailsum/insertList", form);
};
