<template>
  <div>
    <add
      :isShowDialog="dialogVisible"
      :isChange="isChange"
      :data="multipleItemSelection"
      @closeDialog="closeDialog"
      @addItem="addItem"
      @changeItem="changeItem"
    />
    <list-layout>
      <template v-slot:header>
        <header-seach @save="save" @add="add" />
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
        <el-table-column prop="materialCode" label="物资编码"></el-table-column>
        <el-table-column prop="inAmount" label="采购数量"></el-table-column>
        <el-table-column prop="buyPrice" label="价格"></el-table-column>
        <el-table-column prop="bf" label="单位"></el-table-column>
        <el-table-column prop="bf1" label="金额"></el-table-column>
        <el-table-column prop="supplyerCode" label="供应商"></el-table-column>
        <el-table-column prop="batchPageno" label="批次号"></el-table-column>
        <el-table-column prop="bf2" label="包装"></el-table-column>
      </el-table>
    </list-layout>
  </div>
</template>
<script>
import ListLayout from "@/components/ListLayout";
import HeaderSeach from "./components/Header";
import Add from "./components/Add";
import { showWarnToast, showSuccessToast } from "@/util/Toast";

export default {
  components: {
    ListLayout,
    HeaderSeach,
    Add
  },
  name: "PurchaseSupplierBrach",
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
      if (data.materialCode && data.organCode) {
        this.request.search(data.id).then(result => {
          this.tableData = [];
          this.tableData.push(result);
        });
      } else {
        this.getAuthList();
      }
    },
    add() {
      this.dialogVisible = true;
      this.isChange = false;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    addItem(form) {
      const query = this.$route.query;
      this.request
        .PurchasePlanDetailsumSelectpagenogetpc(query)
        .then(result => {
          this.dialogVisible = false;
          form.batchPageno = result;
          form.organCode = query.organCode;
          form.collectPageno = query.collectPageno;
          this.tableData.push(form);
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
    save() {
      if (
        !this.multipleItemSelection ||
        this.multipleItemSelection.length === 0
      ) {
        showWarnToast("请选择要保存的单号");
        return;
      }
      this.request
        .PurchasePlanDetailsumInsertList(this.multipleItemSelection)
        .then(() => {
          showSuccessToast("保存成功！");
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
