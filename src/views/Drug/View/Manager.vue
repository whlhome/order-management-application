<template>
  <list-layout>
    <template v-slot:header>
      <header-seach />
    </template>
    <el-table :data="tableData" stripe style="width: 100%" height="600">
      <el-table-column prop="date" label="编码"></el-table-column>
      <el-table-column prop="name" label="操作"></el-table-column>
      <el-table-column prop="address" label="药品编号"></el-table-column>
      <el-table-column prop="address" label="药品名称"></el-table-column>
      <el-table-column prop="address" label="药品规格"></el-table-column>
      <el-table-column prop="address" label="药品剂型"></el-table-column>
      <el-table-column prop="address" label="进价"></el-table-column>
      <el-table-column prop="address" label="产地"></el-table-column>
      <el-table-column prop="address" label="供应商名称"></el-table-column>
      <el-table-column prop="address" label="是否启用"></el-table-column>
    </el-table>
  </list-layout>
</template>
<script>
import ListLayout from "@/components/ListLayout";
import HeaderSeach from "./components/Header";
export default {
  components: {
    ListLayout,
    HeaderSeach
  },
  name: "Drug",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>
