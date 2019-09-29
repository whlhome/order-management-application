<template>
  <div>
    <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
    <el-button type="primary" size="mini" icon="el-icon-search">新增</el-button>
    <div class="input-suffix">
      <p class="help">商品助记码：</p>
      <el-input v-model="input1" size="mini"></el-input>
    </div>
    <div class="input-suffix">
      <p>供应商：</p>
      <el-select v-model="value1" placeholder="请选择供应商">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderSeach",
  data() {
    return {
      input1: null,
      value1: null,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
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
