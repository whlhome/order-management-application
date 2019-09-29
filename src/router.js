import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";
import store from "@/store";
import BudgetAdd from "@/views/budget/add";
import BudgetSearch from "@/views/budget/search";
import Permission from "@/views/base/permission";
import Goods from "@/views/base/goods";
import UserManager from "@/views/base/usermanager";
import Role from "@/views/base/role";
import Factory from "@/views/base/factory";
import Organ from "@/views/base/organ";
import Pack from "@/views/base/pack";
import Manufactory from "@/views/base/manufactory";
import Depart from "@/views/base/depart";
import PurchaseAll from "@/views/purchase/all";
import PurchaseReview from "@/views/purchase/review";
import PurchaseSearch from "@/views/purchase/search";
import PurchaseSupplier from "@/views/purchase/supplier";
import PurchaseSupplierSearch from "@/views/purchase/supplier/search";
import PurchaseSupplierBrach from "@/views/purchase/supplier/brach";

import Login from "@/views/Login";
Vue.use(Router);

export const asyncRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isLayout: false
    }
  },
  {
    path: "/",
    name: "Home",
    component: Layout,
    meta: {
      defined: true,
      isLayout: true
    }
  },
  {
    path: "/base",
    name: "Base",
    component: Layout,
    meta: {
      title: "基础信息维护",
      icon: "el-icon-user",
      isLayout: true
    },
    children: [
      {
        path: "/base/goods",
        component: Goods,
        meta: {
          title: "商品字典维护"
        }
      },
      {
        path: "/base/factory",
        component: Factory,
        meta: {
          title: "供应商维护"
        }
      },
      {
        path: "/base/permission",
        component: Permission,
        meta: {
          title: "权限管理"
        }
      },
      {
        path: "/base/role",
        component: Role,
        meta: {
          title: "角色管理"
        }
      },
      {
        path: "/base/user",
        component: UserManager,
        meta: {
          title: "用户管理"
        }
      },
      {
        path: "/base/organ",
        component: Organ,
        meta: {
          title: "组织机构维护"
        }
      },
      {
        path: "/base/pack",
        component: Pack,
        meta: {
          title: "包装字典维护"
        }
      },
      {
        path: "/base/depart",
        component: Depart,
        meta: {
          title: "部门字典维护"
        }
      },
      {
        path: "/base/manufactory",
        component: Manufactory,
        meta: {
          title: "生产厂家维护"
        }
      }
    ]
  },
  {
    path: "/budget",
    name: "Report",
    component: Layout,
    meta: {
      title: "预采购管理",
      icon: "el-icon-shopping-cart-2",
      isLayout: true
    },
    children: [
      {
        path: "/budget/add",
        component: BudgetAdd,
        meta: {
          title: "预采购计划录入"
        }
      },
      {
        path: "/budget/search",
        component: BudgetSearch,
        meta: {
          title: "预采购计划查询"
        }
      }
    ]
  },
  {
    path: "/purchase",
    name: "Dictionary",
    component: Layout,
    meta: {
      title: "采购管理",
      icon: "el-icon-shopping-cart-2",
      isLayout: true
    },
    children: [
      {
        path: "/purchase/all",
        component: PurchaseAll,
        meta: {
          title: "汇总录入"
        }
      },
      {
        path: "/purchase/receiver",
        component: PurchaseReview,
        meta: {
          title: "汇总审核"
        }
      },
      {
        path: "/purchase/search-plain",
        component: PurchaseSearch,
        meta: {
          title: "汇总查询"
        }
      },
      {
        path: "/purchase/supplier",
        redirect: "/purchase/supplier/search",
        component: PurchaseSupplier,
        meta: {
          title: "供应商接收确认"
        },
        children: [
          {
            path: "/purchase/supplier/search",
            component: PurchaseSupplierSearch
          },
          {
            path: "/purchase/supplier/brach",
            component: PurchaseSupplierBrach
          }
        ]
      }
    ]
  }
];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: asyncRoutes
});

router.afterEach(to => {
  store.dispatch("router/updatePath", to);
});

export default router;
