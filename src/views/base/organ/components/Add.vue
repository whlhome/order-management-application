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
        <!-- <el-form-item label="组织机构ID">
          <el-input v-model="form.auth_id"></el-input>
        </el-form-item>-->
        <el-form-item label="组织机构名称" prop="auth">
          <el-input v-model="form.auth"></el-input>
        </el-form-item>
        <el-form-item label="组织机构描述" prop="description">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <!-- <el-form-item label="组织机构编码">
          <el-input v-model="form.organ_code"></el-input>
        </el-form-item>-->
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
        auth: "",
        description: ""
      },
      rules: {
        auth: [
          { required: true, message: "请输入组织机构名称", trigger: "blur" }
        ],
        description: [
          { required: true, message: "请输入组织机构描述", trigger: "blur" }
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
