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
      <p class="help">物资编码：</p>
      <el-input v-model="materialCode" size="mini"></el-input>
    </div>
    <div class="input-suffix">
      <p class="help">组织机构：</p>
      <el-input v-model="organCode" size="mini"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderSeach",
  data() {
    return {
      materialCode: null,
      organCode: null
    };
  },
  methods: {
    search() {
      this.$emit("search", {
        materialCode: this.materialCode,
        organCode: this.organCode
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
