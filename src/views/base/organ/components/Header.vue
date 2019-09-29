<template>
  <div>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <div class="input-suffix">
        <!-- <p class="help">角色ID：</p> -->
        <el-input v-model="authId" size="mini" placeholder="角色ID"></el-input>
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
    <!-- <div class="input-suffix">
      <p class="help">权限名称：</p>
      <el-input v-model="name" size="mini"></el-input>
    </div>
    <div class="input-suffix">
      <p class="help">权限描述：</p>
      <el-input v-model="description" size="mini"></el-input>
    </div>
    <div class="input-suffix">
      <p class="help">组织机构：</p>
      <el-input v-model="organization" size="mini"></el-input>
    </div>
    <div class="input-suffix">
      <p class="help">拼音码：</p>
      <el-input v-model="pinyin" size="mini"></el-input>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "HeaderSupplier",
  data() {
    return {
      authId: null
      // name: null,
      // description: null,
      // pinyin: null,
      // organization: null
    };
  },
  methods: {
    search() {
      this.$emit("search", {
        authId: this.authId
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
