<template>
  <add-dialog
    :dialogVisible="isShowDialog"
    @closeDialog="closeDialog"
    @addItem="addItem"
    @opened="opened"
    @closeed="closeed"
  >
    <template>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleComm">
          <el-input v-model="form.roleComm"></el-input>
        </el-form-item>
        <el-form-item label="组织机构" prop="organCode">
          <el-input v-model="form.organCode"></el-input>
        </el-form-item>
      </el-form>
    </template>
  </add-dialog>
</template>
<script>
import AddDialog from "@/components/AddDialog";
export default {
  components: {
    AddDialog
  },
  data() {
    return {
      form: {
        roleName: "",
        roleComm: "",
        organCode: ""
      },
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" }
        ],
        roleComm: [
          { required: true, message: "请输入角色描述", trigger: "blur" }
        ],
        organCode: [
          { required: true, message: "请输入组织机构", trigger: "blur" }
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
          console.log("error submit!!");
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
