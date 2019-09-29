<template>
  <div class="title-layout">
    <div>
      <i class="el-icon-receiving" />
      <h4>管理系统</h4>
    </div>
    <div>
      <p>欢迎回来</p>
      <i class="el-icon-user"></i>
      <i class="el-icon-chat-dot-round"></i>
      <i class="el-icon-setting"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavTitle",
  props: {
    title: {
      type: String
    }
  }
};
</script>
<style scoped>
.title-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #409eff;
  height: 60px;
}
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
}
i {
  padding: 5px;
  height: 20px;
  width: 20px;
  color: white;
}
</style>
