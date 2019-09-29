<template>
  <add-dialog
    :dialogVisible="isShowDialog"
    @closeDialog="closeDialog"
    @addItem="addItem"
    @opened="opened"
    @closeed="closeed"
  >
    <template>
      <el-form
        label-position="left"
        ref="form"
        :rules="rules"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="物资编码" prop="materialCode">
          <el-input v-model="form.materialCode"></el-input>
        </el-form-item>
        <el-form-item label="库房号" prop="kzhNo">
          <el-input v-model="form.kzhNo"></el-input>
        </el-form-item>
        <el-form-item label="阳光网ID码" prop="ygwId">
          <el-input v-model="form.ygwId"></el-input>
        </el-form-item>
        <el-form-item label="注册证产品名称" prop="zczcpName">
          <el-input v-model="form.zczcpName"></el-input>
        </el-form-item>
        <el-form-item label="通用名称" prop="tyName">
          <el-input v-model="form.tyName"></el-input>
        </el-form-item>
        <el-form-item label="规格型号" prop="spection">
          <el-input v-model="form.spection"></el-input>
        </el-form-item>
        <el-form-item label="生产厂家" prop="manCode">
          <el-input v-model="form.manCode"></el-input>
        </el-form-item>
        <el-form-item label="供应商物资编码" prop="gyswzCode">
          <el-input v-model="form.gyswzCode"></el-input>
        </el-form-item>
        <el-form-item label="供货价" prop="ghPrice">
          <el-input v-model="form.ghPrice"></el-input>
        </el-form-item>
        <el-form-item label="单位（最小包装）" prop="minpack">
          <el-input v-model="form.minpack"></el-input>
        </el-form-item>
        <el-form-item label="包装(大)单位" prop="maxpack">
          <el-input v-model="form.maxpack"></el-input>
        </el-form-item>
        <el-form-item label="注册证号" prop="zczhCode">
          <el-input v-model="form.zczhCode"></el-input>
        </el-form-item>
        <el-form-item label="注册证有效期" prop="zczValiddate">
          <el-input v-model="form.zczValiddate"></el-input>
        </el-form-item>
        <el-form-item label="高值低值（1高值 2 低值）" prop="maxminflag">
          <el-input v-model="form.maxminflag"></el-input>
        </el-form-item>
        <el-form-item label="供应商编码" prop="gysCode">
          <el-input v-model="form.gysCode"></el-input>
        </el-form-item>
        <el-form-item label="供应商名称" prop="gysName">
          <el-input v-model="form.gysName"></el-input>
        </el-form-item>
        <el-form-item label="供应商简称" prop="gysJc">
          <el-input v-model="form.gysJc"></el-input>
        </el-form-item>
        <el-form-item label="有效状态" prop="bvalid">
          <el-input v-model="form.bvalid"></el-input>
        </el-form-item>
        <el-form-item label="耗品标志1耗品0非耗品" prop="usetype">
          <el-input v-model="form.usetype"></el-input>
        </el-form-item>
        <el-form-item label="转换系数" prop="conversion">
          <el-input v-model="form.conversion"></el-input>
        </el-form-item>
        <el-form-item label="修改人" prop="modifyopera">
          <el-input v-model="form.modifyopera"></el-input>
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
import { showWarnToast } from "@/util/Toast";
export default {
  components: {
    AddDialog
  },
  data() {
    return {
      form: {
        materialCode: "",
        kzhNo: "",
        ygwId: "",
        zczcpName: "",
        tyName: "",
        spection: "",
        manCode: "",
        gyswzCode: "",
        ghPrice: "",
        minpack: "",
        maxpack: "",
        zczhCode: "",
        zczValiddate: "",
        maxminflag: "",
        gysCode: "",
        gysName: "",
        gysJc: "",
        bvalid: "",
        usetype: "",
        conversion: "",
        modifyopera: "",
        organCode: ""
      },
      rules: {
        materialCode: [
          { required: true, message: "请输入物资编码", trigger: "blur" }
        ],
        kzhNo: [{ required: true, message: "请输入库房号", trigger: "blur" }],
        ygwId: [
          { required: true, message: "请输入阳光网ID码", trigger: "blur" }
        ],
        zczcpName: [
          { required: true, message: "请输入注册证产品名称", trigger: "blur" }
        ],
        tyName: [
          { required: true, message: "请输入通用名称", trigger: "blur" }
        ],
        spection: [
          { required: true, message: "请输入规格型号", trigger: "blur" }
        ],
        manCode: [
          { required: true, message: "请输入生产厂家", trigger: "blur" }
        ],
        gyswzCode: [
          { required: true, message: "请输入供应商物资编码", trigger: "blur" }
        ],
        ghPrice: [{ required: true, message: "请输入供货价", trigger: "blur" }],
        minpack: [
          { required: true, message: "请输入单位（最小包装）", trigger: "blur" }
        ],
        maxpack: [
          { required: true, message: "请输入包装(大)单位", trigger: "blur" }
        ],
        zczhCode: [
          { required: true, message: "请输入注册证号", trigger: "blur" }
        ],
        zczValiddate: [
          { required: true, message: "请输入注册证有效期", trigger: "blur" }
        ],
        maxminflag: [
          {
            required: true,
            message: "请输入高值低值（1高值 2 低值）",
            trigger: "blur"
          }
        ],
        gysCode: [
          { required: true, message: "请输入供应商编码", trigger: "blur" }
        ],
        gysName: [
          { required: true, message: "请输入供应商名称", trigger: "blur" }
        ],
        gysJc: [
          { required: true, message: "请输入供应商简称", trigger: "blur" }
        ],
        bvalid: [
          { required: true, message: "请输入有效状态", trigger: "blur" }
        ],
        usetype: [
          {
            required: true,
            message: "请输入耗品标志 1 耗品 0 非耗品",
            trigger: "blur"
          }
        ],
        conversion: [
          { required: true, message: "请输入转换系数", trigger: "blur" }
        ],
        modifyopera: [
          { required: true, message: "请输入修改人", trigger: "blur" }
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
          showWarnToast("数据输入不完整，请检查");
          return false;
        }
      });
    },
    opened() {
      if (this.isChange) {
        this.form = Object.assign({}, this.data[0]);
      }
    },
    closeed() {
      this.form = {};
    }
  }
};
</script>
