<template>
  <el-container>
    <el-header style="padding:0">
      <slot name="header"></slot>
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
    <el-footer v-if="isShowBottom">
      <slot name="bottom">
        <bottom-bar-with-number />
      </slot>
    </el-footer>
  </el-container>
</template>
<script>
import BottomBarWithNumber from "./components/BottomBarWithPagination";
export default {
  components: {
    BottomBarWithNumber
  },
  props: {
    isShowBottom: {
      type: Boolean,
      default: true
    }
  },
  name: "ListLayout"
};
</script>
