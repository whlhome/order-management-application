<template>
  <div>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <div class="input-suffix">
        <!-- <p class="help">角色ID：</p> -->
        <el-input v-model="id" size="mini" placeholder="角色ID"></el-input>
      </div>
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-search"
        @click="search"
        >搜索</el-button
      >
      <el-button type="success" size="mini" icon="el-icon-plus" @click="add"
        >新增</el-button
      >
      <el-button type="warning" size="mini" icon="el-icon-edit" @click="change"
        >修改</el-button
      >
      <el-button type="danger" size="mini" icon="el-icon-delete" @click="dele"
        >删除</el-button
      >
    </el-col>
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
        // name: this.name,
        // description: this.description,
        // pinyin: this.pinyin,
        // organization: this.organization
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
  width: 50px;
}
</style>
