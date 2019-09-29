<template>
  <div>
    <el-button type="primary" size="mini" icon="el-icon-search" @click="search"
      >搜索</el-button
    >
    <el-button type="primary" size="mini" icon="el-icon-plus" @click="add"
      >新增</el-button
    >
    <el-button type="primary" size="mini" icon="el-icon-tickets" @click="change"
      >修改</el-button
    >
    <el-button type="primary" size="mini" icon="el-icon-minus" @click="dele"
      >删除</el-button
    >
    <div class="input-suffix">
      <p class="help">用户ID：</p>
      <el-input v-model="id" size="mini"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderSeach",
  data() {
    return {
      id: null
    };
  },
  methods: {
    search() {
      this.$emit("search", {
        id: this.id
      });
    },
    add() {
      this.$emit("add");
    },
    change() {
      this.$emit("change");
    },
    dele() {
      this.$emit("dele");
    }
  }
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input-suffix {
  margin-left: 10px;
}
.help {
  width: 150px;
}
</style>
