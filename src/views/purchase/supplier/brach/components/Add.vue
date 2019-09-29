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
        <el-form-item label="物资编码" prop="materialCode">
          <el-input v-model="form.materialCode"></el-input>
        </el-form-item>
        <el-form-item label="采购数量" prop="inAmount">
          <el-input v-model="form.inAmount"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="buyPrice">
          <el-input v-model="form.buyPrice"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="bf">
          <el-input v-model="form.bf"></el-input>
        </el-form-item>
        <el-form-item label="金额" prop="bf1">
          <el-input v-model="form.bf1"></el-input>
        </el-form-item>
        <el-form-item label="供应商" prop="supplyerCode">
          <el-input v-model="form.supplyerCode"></el-input>
        </el-form-item>
        <el-form-item label="包装" prop="bf2">
          <el-input v-model="form.bf2"></el-input>
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
        materialCode: "",
        inAmount: "",
        buyPrice: "",
        bf: "",
        bf1: "",
        supplyerCode: "",
        bf2: ""
      },
      rules: {
        materialCode: [
          { required: true, message: "请输入物资编码 ", trigger: "blur" }
        ],
        inAmount: [
          { required: true, message: "请输入采购数量", trigger: "blur" }
        ],
        buyPrice: [{ required: true, message: "请输入价格", trigger: "blur" }],
        bf: [{ required: true, message: "请输入单位", trigger: "blur" }],

        bf1: [{ required: true, message: "请输入金额", trigger: "blur" }],
        supplyerCode: [
          { required: true, message: "请输入供应商", trigger: "blur" }
        ],
        bf2: [{ required: true, message: "请输入包装", trigger: "blur" }]
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
