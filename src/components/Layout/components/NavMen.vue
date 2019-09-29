<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-openeds="definedOpen"
    :default-active="$route.path"
    :router="true"
  >
    <el-submenu v-for="router in routeMap" :key="router.index" :index="router.index">
      <template slot="title" class="nav-title">
        <i :class="router.icon"></i>
        <span>{{ router.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="child in router.children"
          :key="child.index"
          :index="child.index"
        >{{ child.title }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { asyncRoutes } from "@/router.js";
export default {
  name: "NavMen",
  data() {
    return {
      routeMap: [],
      definedOpen: [],
      route: this.$route
    };
  },
  props: {
    isShowSide: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    generateRouteMap() {
      asyncRoutes.forEach(item => {
        let route = {};
        route.children = [];
        if (!item.meta.isLayout) {
          return;
        }
        if (!item.meta.defined) {
          this.definedOpen.push(item.path);
          route.path = item.path;
          route.title = item.meta.title;
          route.icon = item.meta.icon;
          route.index = item.path;
          item.children.map(childitem => {
            route.children.push({
              title: childitem.meta.title,
              path: childitem.path,
              index: childitem.path
            });
          });
          this.routeMap.push(route);
        }
      });
    }
  },
  mounted() {
    this.generateRouteMap();
  }
};
</script>

<style scoped>
.el-submenu__title {
  background: yellow;
}
</style>
