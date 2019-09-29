<template>
  <div>
    <el-button type="primary" size="mini" icon="el-icon-search" @click="add"
      >增加</el-button
    >
    <el-button type="success" size="mini" icon="el-icon-plus" @click="save"
      >保存</el-button
    >
    <el-button type="success" size="mini" icon="el-icon-plus" @click="dele"
      >删除</el-button
    >
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
    add() {
      this.$emit("add");
    },
    save() {
      this.$emit("save");
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
.demo-input-suffix {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
