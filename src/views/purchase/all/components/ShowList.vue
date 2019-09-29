<template>
  <el-row style="width:100%">
    <el-col :span="4" class="border-right">
      <el-table
        :data="list"
        style="width:100%"
        @selection-change="handleSelectionListChange"
        @row-click="openDetails"
      >
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
    </el-col>
    <el-col :span="20" class="border-left">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionItemChange"
      >
        <el-table-column label="项目名称" prop="name"></el-table-column>
        <el-table-column type="selection" label="操作" />
        <el-table-column label="单位" prop="unit"></el-table-column>
        <el-table-column label="单价" prop="price"></el-table-column>
        <el-table-column label="规格" prop="specification"></el-table-column>
        <el-table-column label="数量" prop="number"></el-table-column>
        <el-table-column label="金额" prop="money"></el-table-column>
        <el-table-column label="供应商" prop="supplier"></el-table-column>
        <el-table-column label="供应月份" prop="month"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "ShowList",
  data() {
    return {
      list: [],
      currentIndex: 0,
      tableData: []
    };
  },
  methods: {
    setList(list) {
      console.log("list");
      console.log(list);
      this.list = list;
      this.currentIndex = list.length - 1;
      this.tableData = this.list[this.currentIndex].data;
    },
    openDetails(row) {
      this.currentIndex = this.allList.indexOf(row);
      this.tableData = row.data;
    },
    handleSelectionListChange(val) {
      this.multipleListSelection = val;
    },
    handleSelectionItemChange(val) {
      this.multipleItemSelection = val;
    }
  }
};
</script>
<style scoped>
.border-left {
  border-left: 1px solid #e4e7ed;
}
</style>
