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
          <el-table-column prop="roleCode" label="角色ID"></el-table-column>
          <el-table-column prop="roleName" label="角色名称"></el-table-column>
          <el-table-column prop="roleComm" label="角色描述"></el-table-column>
          <el-table-column prop="organCode" label="组织机构"></el-table-column>
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
  name: "Role",
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      multipleItemSelection: null,
      isChange: false
    };
  },
  mounted() {
    decodeURI(this.getAuthList());
  },
  methods: {
    getAuthList() {
      this.request.roleGetList().then(result => {
        this.tableData = result;
      });
    },
    search(data) {
      if (data.id) {
        this.request.roleSearch(data.id).then(result => {
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
      this.request.roleInsert(form).then(() => {
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
      const item = this.multipleItemSelection[0];
      this.request.roleDeleteById(item.roleCode).then(() => {
        this.getAuthList();
      });
    },
    handleSelectionChange(val) {
      this.multipleItemSelection = val;
    },
    changeItem(form) {
      this.request.roleUpdate(form).then(() => {
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
