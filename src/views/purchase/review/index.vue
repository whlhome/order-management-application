<template>
  <div>
    <list-layout>
      <template v-slot:header>
        <header-seach @search="search" @add="add" @change="change" @dele="dele" />
      </template>
      <el-row style="width:100%">
        <el-col :span="12">
      <el-table
        :data="allList"
        style="width:100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" label="操作" />
        <el-table-column prop="planPageno" label="计划单号"></el-table-column>
        <el-table-column prop="comment" label="备注"></el-table-column>
        <el-table-column prop="innerAcctNo" label="申请科室"></el-table-column>
        <el-table-column prop="sendDate" label="申请日期"></el-table-column>
        <el-table-column prop="drawer" label="申请人"></el-table-column>
         </el-table>
      </el-col>
      <el-col :span="12" class="border-left">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
         
        
      >
        <el-table-column prop="spection" label="规格"></el-table-column>
        <el-table-column prop="inAmount" label="数量"></el-table-column>
        <el-table-column prop="pack" label="包装"></el-table-column>
        <el-table-column prop="buyPrice" label="金额"></el-table-column>
        <el-table-column prop="supplyerCode" label="供应商"></el-table-column>
      </el-table>
      </el-col>
  </el-row>
    </list-layout>
  </div>
</template>
<script>
import ListLayout from "@/components/ListLayout";
import HeaderSeach from "./components/Header";
import { showWarnToast, showSuccessToast } from "@/util/Toast";
export default {
  components: {
    ListLayout,
    HeaderSeach
  },
  name: "Goods",
  data() {
    return {
      allList: [],
      dialogVisible: false,
      tableData: [],
      multipleItemSelection: null,
      isChange: false
    };
  },
  methods: {
    getAuthList() {
      this.request.goodsGetList().then(result => {
        this.tableData = result;
      });
    },
    search(data) {
      this.request.PurchasePlanCustSelectByIf(data).then(result => {
        this.tableData = result;
        console.log(result);
      });
    },
    add(data) {
      if (this.tableData.length <= 0) {
        showWarnToast("列表为空");
      }
      const form = {
        organcode: this.tableData[0].organCode,
        begintime: data.sdate,
        endtime: data.edate,
        providemonth_in: data.mounth
      };
      this.request.PurchasePlanCustHZ(form).then(() => {
        showSuccessToast("汇总成功！");
      });
    },
    addItem(form) {
      console.log(this.request);
      this.request.goodsInsert(form).then(() => {
        this.dialogVisible = false;
        this.getAuthList();
      });
    },
    change() {
      if (
        !this.multipleItemSelection ||
        this.multipleItemSelection.length === 0
      ) {
        showWarnToast("请选择要修改的商品");
        return;
      }
      this.dialogVisible = true;
      this.isChange = true;
    },
    dele() {
      if (
        !this.multipleItemSelection ||
        this.multipleItemSelection.length === 0
      ) {
        showWarnToast("请选择要作废订单");
        return;
      }
      let form = [];
      this.multipleItemSelection.forEach(item => {
        const data = {};
        data.organCode = item.organCode;
        data.planPageno = item.planPageno;
        data.cancelFlag = 1 + "";
        form.push(data);
      });
      this.request.planpagenoUpdate(form).then(() => {
        showSuccessToast("作废成功！");
      });
    },
    handleSelectionChange(val) {
      this.multipleItemSelection = val;
    },
    changeItem(form) {
      this.request.goodsUpdate(form).then(() => {
        this.dialogVisible = false;
        this.getAuthList();
      });
    }
  }
};
</script>
<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.el-table .success-row {
  background: #409eff;
}
.border-left {
  border-left: 1px solid #e4e7ed;
}
</style>