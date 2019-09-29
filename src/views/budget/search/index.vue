<template>
  <list-layout>
    <template v-slot:header>
      <header-seach />
    </template>
    <el-table
      :data="tableData"
      show-summary
      stripe
      style="width: 100%"
      height="600"
    >
      <el-table-column type="selection" label="操作" />
      <el-table-column prop="address" label="订单号"></el-table-column>
      <el-table-column prop="address" label="日期"></el-table-column>
      <el-table-column prop="address" label="审核状态"></el-table-column>
      <el-table-column prop="address" label="发送状态"></el-table-column>
      <el-table-column prop="address" label="申请科室"></el-table-column>
      <el-table-column prop="address" label="申请日期"></el-table-column>
      <el-table-column prop="address" label="供货月份"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >打印</el-button
          >
          <el-button type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
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
  name: "BudgetSearch",
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
