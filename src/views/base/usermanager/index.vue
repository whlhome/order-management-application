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
        <el-table-column prop="userId" label="用户ID"></el-table-column>
        <el-table-column prop="userName" label="用户名称"></el-table-column>
        <el-table-column prop="userPassword" label="用户密码"></el-table-column>
        <el-table-column prop="roleCode" label="角色ID"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleComm" label="角色描述"></el-table-column>
        <el-table-column prop="organCode" label="机构编码"></el-table-column>
        <el-table-column prop="pyCode" label="拼音码"></el-table-column>
        <el-table-column prop="modifydate" label="修改日期"></el-table-column>
        <el-table-column prop="userCode" label="用户编码"></el-table-column>
        <el-table-column prop="bvalid" label="有效状态"></el-table-column>
        <el-table-column prop="unit_code" label="单位编码"></el-table-column>
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
  name: "UserManager",
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
      this.request.userManagergetAuthInfoList().then(result => {
        this.tableData = result;
      });
    },
    search(data) {
      if (data.id) {
        this.request.userManagersearch(data.id).then(result => {
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
      this.request.userMangerInsert(form).then(() => {
        this.dialogVisible = false;
        this.getAuthList();
      });
    },
    change() {
      if (
        !this.multipleItemSelection ||
        this.multipleItemSelection.length === 0
      ) {
        showWarnToast("请选择要修改的用户");
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
        showWarnToast("请选择要删除的用户");
        return;
      }
      this.request
        .userManagerdeleteById(this.multipleItemSelection[0].userId)
        .then(() => {
          this.getAuthList();
        });
    },
    handleSelectionChange(val) {
      this.multipleItemSelection = val;
    },
    changeItem(form) {
      this.request.userManagerUpdate(form).then(() => {
        this.dialogVisible = false;
        this.getAuthList();
      });
    }
  }
};
</script>
