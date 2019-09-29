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
        <el-table-column prop="authId" label="权限ID"></el-table-column>
        <el-table-column prop="auth" label="权限名称"></el-table-column>
        <el-table-column prop="description" label="权限描述"></el-table-column>
        <el-table-column prop="organCode" label="组织结构"></el-table-column>
        <el-table-column prop="pyCode" label="拼音码"></el-table-column>
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
  name: "Permission",
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
      this.request.getAuthInfoList().then(result => {
        this.tableData = result;
      });
    },
    search(data) {
      if (data.id) {
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
      this.request.authInsert(form).then(() => {
        this.dialogVisible = false;
        this.getAuthList();
      });
    },
    change() {
      if (
        !this.multipleItemSelection ||
        this.multipleItemSelection.length === 0
      ) {
        showWarnToast("请选择要修改的权限");
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
        showWarnToast("请选择要删除的权限");
        return;
      }
      this.request.deleteById(this.multipleItemSelection[0].authId).then(() => {
        this.getAuthList();
      });
    },
    handleSelectionChange(val) {
      this.multipleItemSelection = val;
    },
    changeItem(form) {
      this.request.update(form).then(() => {
        this.dialogVisible = false;
        this.getAuthList();
      });
    }
  }
};
</script>
