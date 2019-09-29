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
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          height="400"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" label="操作" />
          <el-table-column prop="authId" label="组织机构ID"></el-table-column>
          <el-table-column prop="auth" label="组织机构名称"></el-table-column>
          <el-table-column
            prop="description"
            label="组织机构描述"
          ></el-table-column>
          <el-table-column
            prop="organCode"
            label="组织机构编码"
          ></el-table-column>
          <el-table-column prop="pyCode" label="拼音码"></el-table-column>
        </el-table>
      </el-col>
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
  name: "Organ",
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
      this.request.organGetList().then(result => {
        this.tableData = result;
      });
    },
    search(data) {
      if (data.authId) {
        this.request.organSearch(data.authId).then(result => {
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
      this.request.organInsert(form).then(() => {
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
      this.request
        .organDeleteById(this.multipleItemSelection[0].authId)
        .then(() => {
          this.getAuthList();
        });
    },
    handleSelectionChange(val) {
      this.multipleItemSelection = val;
    },
    changeItem(form) {
      console.log("getAuthList");
      this.request.organUpdate(form).then(() => {
        this.dialogVisible = false;
        this.getAuthList();
      });
    }
  }
};
</script>
<style scoped>
.border-left {
  border-left: 0px solid #e4e7ed;
}
</style>
