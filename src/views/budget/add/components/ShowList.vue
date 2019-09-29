<template>
  <el-row style="width:100%">
    <el-col :span="4" class="border-right">
      <el-table :data="list" style="width:100%" @row-click="openDetails">
        <el-table-column label="计划单号" prop="planPageno"></el-table-column>
      </el-table>
    </el-col>
    <el-col :span="20" class="border-left">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionItemChange"
        @row-click="onListClick"
      >
        <el-table-column label="物资编码" prop="materialCode"></el-table-column>
        <el-table-column type="selection" label="操作" />
        <el-table-column label="采购数量" prop="inAmount"></el-table-column>
        <el-table-column label="价格" prop="buyPrice"></el-table-column>
        <el-table-column label="单位" prop="pack"></el-table-column>
        <el-table-column label="入出库单号" prop="in_out_docu"></el-table-column>
        <el-table-column label="生产厂家" prop="manuCode"></el-table-column>
        <el-table-column label="规格" prop="spection"></el-table-column>
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
      tableData: [],
      currentMainList: null
    };
  },
  mounted() {
    this.request.purchasePlanGetPlanInfoonemon().then(resule => {
      this.list = resule;
    });
  },
  methods: {
    setList(list) {
      console.log("list");
      console.log(list);
      this.list = list;
      this.currentIndex = list.length - 1;
      this.tableData = this.list[this.currentIndex].data;
    },
    openDetails(val) {
      const form = { planPageno: val.planPageno };
      this.request.PurchasePlanDetailgetPlanDetailbyno(form).then(result => {
        console.log("PurchasePlanDetailgetPlanDetailbyno");
        console.log(result);
        this.tableData = result;
        this.currentMainList = val;
      });
    },
    handleSelectionItemChange(val) {
      this.multipleItemSelection = val;
    },
    onListClick(val) {
      let form = { ...this.currentMainList };
      form.tintendpurchasePlandetail = [val];
      this.$emit("addToAdd", form);
    }
  }
};
</script>
<style scoped>
.border-left {
  border-left: 1px solid #e4e7ed;
}
</style>
