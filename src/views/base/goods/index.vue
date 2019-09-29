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
        <header-seach
          @search="search"
          @add="add"
          @change="change"
          @dele="dele"
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
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="materialCode" label="物资编码"></el-table-column>
        <el-table-column prop="kzhNo" label="库房号"></el-table-column>
        <el-table-column prop="ygwId" label="阳光网ID码"></el-table-column>
        <el-table-column
          prop="zczcpName"
          label="注册证产品名称"
        ></el-table-column>
        <el-table-column prop="tyName" label="通用名称"></el-table-column>
        <el-table-column prop="spection" label="规格型号"></el-table-column>
        <el-table-column prop="manCode" label="生产厂家"></el-table-column>
        <el-table-column
          prop="gyswzCode"
          label="供应商物资编码"
        ></el-table-column>
        <el-table-column prop="ghPrice" label="供货价"></el-table-column>
        <el-table-column
          prop="minpack"
          label="单位（最小包装）"
        ></el-table-column>
        <el-table-column prop="maxpack" label="包装(大)单位"></el-table-column>
        <el-table-column prop="zczhCode" label="注册证号"></el-table-column>
        <el-table-column
          prop="zczValiddate"
          label="注册证有效期"
        ></el-table-column>
        <el-table-column prop="maxminflag" label="高值低值"></el-table-column>
        <el-table-column prop="gysCode" label="供应商编码"></el-table-column>
        <el-table-column prop="gysName" label="供应商名称"></el-table-column>
        <el-table-column prop="gysJc" label="供应商简称"></el-table-column>
        <el-table-column prop="pyCode" label="拼音码"></el-table-column>
        <el-table-column prop="bvalid" label="有效状态"></el-table-column>
        <el-table-column prop="usetype" label="耗品标志"></el-table-column>
        <el-table-column prop="conversion" label="转换系数"></el-table-column>
        <el-table-column prop="modifydate" label="修改日期"></el-table-column>
        <el-table-column prop="modifyopera" label="修改人"></el-table-column>
        <el-table-column prop="organCode" label="组织机构"></el-table-column>
      </el-table>
    </list-layout>
  </div>
</template>
<script>
import ListLayout from "@/components/ListLayout";
import HeaderSeach from "./components/Header";
import Add from "./components/Add";
import { showWarnToast } from "@/util/Toast";
export default {
  components: {
    ListLayout,
    HeaderSeach,
    Add
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
  mounted() {
    this.getAuthList();
  },
  methods: {
    getAuthList() {
      this.request.goodsGetList().then(result => {
        this.tableData = result;
      });
    },
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
    }
  }
};
</script>
