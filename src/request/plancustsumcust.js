import { post } from "./axios";
export const planCustSumCustGetlist = form => {
  return post("PlanCustSumCust/getlist", form);
};
