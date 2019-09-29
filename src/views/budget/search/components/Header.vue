<template>
  <div class="header">
    <div class="input-suffix">
      <p>状态：</p>
      <el-select
        v-model="value1"
        placeholder="请选择状态"
        size="mini"
        style="width:100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="input-suffix">
      <p>部门：</p>
      <el-select
        v-model="value1"
        placeholder="请选择部门"
        size="mini"
        style="width:100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="demo-input-suffix">
      计划单号：
      <el-input
        placeholder="请输入计划单号"
        suffix-icon="el-icon-date"
        size="mini"
        style="width:100px"
        v-model="input1"
      ></el-input>
    </div>
    <div class="demo-input-suffix">
      日期：
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择开始日期"
      ></el-date-picker>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择结束日期"
      ></el-date-picker>
    </div>
    <div class="demo-input-suffix">
      选择月份：
      <el-date-picker
        v-model="value2"
        type="month"
        placeholder="选择月"
        style="width:100px"
      ></el-date-picker>
    </div>
    <el-button type="primary" size="mini" icon="el-icon-search">查询</el-button>
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
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
