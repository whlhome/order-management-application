<template>
  <div>
    <p>
      共
      <span>{{ maxNumber }}</span>
      条记录，当前显示
      <span>{{ currentPage }}</span>
      页
    </p>
    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    maxNumber: {
      type: Number,
      default: 100
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  name: "BottomBarWithNumber"
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
span {
  color: #409eff;
}
</style>
