<template>
  <div>
    <list-layout>
      <template v-slot:header>
        <header-seach
          @search="search"
          @add="add"
          @review="review"
          @batch="batch"
        />
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
  name: "PurchaseSupplierSearch",
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      multipleItemSelection: null,
      isChange: false
    };
  },
  methods: {
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
        showWarnToast("请选择要删除的商品");
        return;
      }
      const item = this.multipleItemSelection[0];
      this.request
        .goodsDeleteById(item.materialCode, item.organCode, item.id)
        .then(() => {
          this.getAuthList();
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
    },
    batch() {
      const list = this.multipleItemSelection;
      console.log(list);
      if (!list || list.length === 0) {
        showWarnToast("请选择要审核单目");
        return;
      }
      if (list.length !== 1) {
        showWarnToast("仅支持单个条目分批");
        return;
      }
      const form = {
        organCode: list[0].organCode,
        collectPageno: list[0].collectPageno,
        mainid: list[0].mainid
      };
      this.$router.push({ path: "/purchase/supplier/brach", query: form });
    }
  }
};
</script>
