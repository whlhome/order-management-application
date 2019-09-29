<template>
  <add-dialog
    :dialogVisible="isShowDialog"
    @closeDialog="closeDialog"
    @addItem="addItem"
    @opened="opened"
    @closeed="closeed"
  >
    <template>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名称" prop="userName">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="userPassword">
          <el-input v-model="form.userPassword"></el-input>
        </el-form-item>
        <el-form-item label="角色ID" prop="roleCode">
          <el-input v-model="form.roleCode"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleComm">
          <el-input v-model="form.roleComm"></el-input>
        </el-form-item>
        <el-form-item label="机构编码" prop="organCode">
          <el-input v-model="form.organCode"></el-input>
        </el-form-item>
        <el-form-item label="有效状态" prop="bvalid">
          <el-input v-model="form.bvalid"></el-input>
        </el-form-item>
        <el-form-item label="单位编码" prop="unitCode">
          <el-input v-model="form.unitCode"></el-input>
        </el-form-item>
      </el-form>
    </template>
  </add-dialog>
</template>
<script>
import AddDialog from "@/components/AddDialog";
import { showWarnToast } from "@/util/Toast";
export default {
  components: {
    AddDialog
  },
  data() {
    return {
      form: {
        userName: "",
        userPassword: "",
        roleCode: "",
        roleName: "",
        roleComm: "",
        organCode: "",
        bvalid: "",
        unitCode: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名称", trigger: "blur" }
        ],
        userPassword: [
          { required: true, message: "请输入用户密码", trigger: "blur" }
        ],
        roleCode: [
          { required: true, message: "请输入角色ID", trigger: "blur" }
        ],
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" }
        ],
        roleComm: [
          { required: true, message: "请输入角色描述", trigger: "blur" }
        ],
        organCode: [
          { required: true, message: "请输入机构编码", trigger: "blur" }
        ],
        bvalid: [
          { required: true, message: "请输入有效状态", trigger: "blur" }
        ],
        unitCode: [
          { required: true, message: "请输入单位编码", trigger: "blur" }
        ]
      }
    };
  },
  name: "Add",
  props: {
    isShowDialog: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array
    },
    isChange: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    addItem() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.form);
          if (this.isChange) {
            this.$emit("changeItem", this.form);
          } else {
            this.$emit("addItem", this.form);
          }
        } else {
          showWarnToast("数据输入不完整，请检查");
          return false;
        }
      });
    },
    opened() {
      this.form = this.isChange ? Object.assign({}, this.data[0]) : {};
    },
    closeed() {
      this.form = {};
    }
  }
};
</script>
