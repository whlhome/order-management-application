import { post } from "./axios";

export const PurchasePlanCustSelectByIf = form => {
  return post("PurchasePlanCust/selectbyif", form);
};

export const PurchasePlanCustHZ = form => {
  return post("PlanCustSumCust/hz", form);
};

export const PlanCustSumCustSelectbyif = form => {
  return post("PlanCustSumCust/selectbyif", form);
};
