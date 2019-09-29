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
    <el-button type="success" size="mini" icon="el-icon-plus" @click="add"
      >汇总</el-button
    >
    <el-button type="danger" size="mini" icon="el-icon-delete" @click="dele"
      >作废</el-button
    >
    <el-button type="warning" size="mini" icon="el-icon-edit" @click="change"
      >汇总查看</el-button
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
      console.log(this.mounth);
      this.$emit("search", {
        sdate: this.sdate,
        edate: this.edate,
        mounth: this.mounth
      });
    },
    add() {
      if (!this.sdate) {
        showWarnToast("请选择开始时间");
      }
      if (!this.edate) {
        showWarnToast("请选择结束时间");
      }
      if (!this.mounth) {
        showWarnToast("请选择月份");
      }
      this.$emit("add", {
        sdate: this.sdate,
        edate: this.edate,
        mounth: this.mounth
      });
    },
    change() {
      this.$emit("change");
    },
    dele() {
      this.$emit("dele");
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
