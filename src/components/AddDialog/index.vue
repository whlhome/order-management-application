<template>
  <el-dialog
    title="添加"
    :visible.sync="dialogVisible"
    :show-close="false"
    @open="opened"
    @close="closeed"
  >
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">返 回</el-button>
      <el-button type="primary" @click="addItem">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: "AddDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    addItem() {
      this.$emit("addItem");
    },
    opened() {
      this.$emit("opened");
    },
    closeed() {
      this.$emit("closeed");
    }
  }
};
</script>
