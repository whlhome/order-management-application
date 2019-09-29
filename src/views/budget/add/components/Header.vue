<template>
  <div>
    <el-button
      type="primary"
      size="mini"
      v-for="title in titles"
      :key="title"
      @click="onClick(title)"
      >{{ title }}</el-button
    >
  </div>
</template>
<script>
const buttonTitle = [
  "新单",
  "新条目",
  "删单",
  "删条目",
  "保存",
  "审核",
  "打印",
  "作废",
  "发送"
];
export default {
  name: "HeaderManager",
  data() {
    return {
      titles: buttonTitle
    };
  },
  methods: {
    onClick(key) {
      console.log(key);
      switch (key) {
        case buttonTitle[0]:
          this.$emit("addList");
          break;
        case buttonTitle[1]:
          this.$emit("addItem");
          break;
        case buttonTitle[2]:
          this.$emit("deleteList");
          break;
        case buttonTitle[3]:
          this.$emit("deleteItem");
          break;
        case buttonTitle[4]:
          this.$emit("save");
          break;
        case buttonTitle[5]:
          this.$emit("review");
          break;
        
        case buttonTitle[7]:
          this.$emit("invalid");
          break;
        case buttonTitle[8]:
          this.$emit("send");
          break;
        default:
          break;
      }
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
</style>
