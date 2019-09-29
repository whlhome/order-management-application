import * as tzdauth from "./tzdauth";
import * as goods from "./tzdgoods";
import * as tusertable from "./tusertable";
import * as factory from "./tzdfactory";
import * as manufactory from "./tzdmanufactory";
import * as organ from "./tzdorgan";
import * as pack from "./tzdpack";
import * as role from "./tzdroletable";
import * as depart from "./tzddepart";
import * as purchase from "./purchaseplan";
import * as purchasesumplan from "./purchasesumplan";
import * as plancustsumcuts from "./plancustsumcust";
import * as purchaseplancust from "./purchaseplancust";
export default {
  ...tzdauth,
  ...goods,
  ...tusertable,
  ...factory,
  ...manufactory,
  ...organ,
  ...pack,
  ...role,
  ...depart,
  ...purchase,
  ...purchasesumplan,
  ...plancustsumcuts,
  ...purchaseplancust
};
