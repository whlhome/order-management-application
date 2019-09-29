<template>
  <div>
    <i class="el-icon-s-promotion" @click="showSide" />
    <el-breadcrumb separator="/" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in matched" :key="item.path">
        <a :href="item.path">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  props: {
    path: String
  },
  computed: {
    ...mapState({
      matched: state => state.router.path.matched
    })
  },
  methods: {
    showSide() {
      this.$emit("showSide");
    }
  }
};
</script>
<style scoped>
div {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
i {
  color: black;
}
</style>
