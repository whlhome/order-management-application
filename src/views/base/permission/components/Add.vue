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
        <el-form-item label="权限名称" prop="auth">
          <el-input v-model="form.auth"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="description">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="组织结构" prop="organCode">
          <el-input v-model="form.organCode"></el-input>
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
        auth: "",
        description: "",
        organCode: ""
      },
      rules: {
        auth: [{ required: true, message: "请输入权限名称", trigger: "blur" }],
        description: [
          { required: true, message: "请输入权限描述", trigger: "blur" }
        ],
        organCode: [
          { required: true, message: "请输入组织结构", trigger: "blur" }
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
