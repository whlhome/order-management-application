<template>
  <div>
    <div class="demo-input-suffix">
      日期：
      <el-date-picker
        v-model="sdate"
        type="date"
        placeholder="选择开始日期"
      ></el-date-picker>
      <el-date-picker
        v-model="edate"
        type="date"
        placeholder="选择结束日期"
      ></el-date-picker>
    </div>
    <div class="demo-input-suffix">
      供货月份：
      <el-date-picker
        v-model="mounth"
        type="month"
        value-format="MM"
        placeholder="选择供货月份"
      ></el-date-picker>
    </div>
    <el-button type="primary" size="mini" icon="el-icon-search" @click="search"
      >查询</el-button
    >
    <el-button type="success" size="mini" icon="el-icon-plus" @click="save"
      >保存</el-button
    >
    <el-button type="success" size="mini" icon="el-icon-plus" @click="review"
      >审核</el-button
    >
    <el-button type="success" size="mini" icon="el-icon-plus" @click="batch"
      >分批</el-button
    >
  </div>
</template>
<script>
import { showWarnToast } from "@/util/Toast";
export default {
  name: "HeaderSeach",
  data() {
    return {
      sdate: null,
      edate: null,
      mounth: null
    };
  },
  methods: {
    search() {
      if (!this.sdate) {
        showWarnToast("请选择开始时间");
      }
      if (!this.edate) {
        showWarnToast("请选择结束时间");
      }
      if (!this.mounth) {
        showWarnToast("请选择月份");
      }
      this.$emit("search", {
        sdate: this.sdate,
        edate: this.edate,
        mounth: this.mounth
      });
    },
    save() {
      this.$emit("save");
    },
    review() {
      this.$emit("review");
    },
    batch() {
      this.$emit("batch");
    }
  }
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input-suffix {
  margin-left: 10px;
}
.help {
  width: 150px;
}
.demo-input-suffix {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
