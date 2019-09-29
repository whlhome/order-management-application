<template>
  <div>
    <list-layout>
      <template v-slot:header>
        <header-seach @search="search" @review="review" @send="send" />
      </template>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        height="600"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" label="操作" />
        <el-table-column
          prop="collectPageno"
          label="汇总单号"
        ></el-table-column>
        <el-table-column prop="comment" label="备注"></el-table-column>
        <el-table-column
          prop="material_code"
          label="项目名称"
        ></el-table-column>
        <el-table-column
          prop="material_code"
          label="项目编码"
        ></el-table-column>
        <el-table-column prop="buy_price" label="价格"></el-table-column>
        <el-table-column prop="in_amount" label="数量"></el-table-column>
        <el-table-column prop="supplyer_code" label="供应商"></el-table-column>
      </el-table>
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
      this.request.PlanCustSumCustSelectbyif(data).then(result => {
        this.tableData = result;
      });
    },
    review() {
      const list = this.multipleItemSelection;
      console.log(list);
      if (!list || list.length === 0) {
        showWarnToast("请选择要审核单目");
        return;
      }
      const a = Date.now();
      let form = [];
      list.forEach(item => {
        const data = {};
        data.organCode = item.organCode;
        data.collectPageno = item.collectPageno;
        data.acceptFlag = 1 + "";
        data.acceptDate = a;
        data.mainid = item.mainid; //暂时写死
        form.push(data);
      });
      this.request.PurchasesumPlanUpdate(form).then(() => {
        showSuccessToast("审核成功");
      });
    },
    send() {
      const list = this.multipleItemSelection;
      console.log(list);
      if (!list || list.length === 0) {
        showWarnToast("请选择要发送单目");
        return;
      }
      const a = Date.now();
      let form = [];
      list.forEach(item => {
        const data = {};
        data.organCode = item.organCode;
        data.collectPageno = item.collectPageno;
        data.sendFlag = 1 + "";
        data.sendDate = a;
        data.mainid = item.mainid; //暂时写死
        form.push(data);
      });
      this.request.PurchasesumPlanUpdate(form).then(() => {
        showSuccessToast("发送成功");
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
