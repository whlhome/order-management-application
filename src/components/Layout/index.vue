<template>
  <el-container v-loading="loading">
    <el-header style="padding: 0">
      <nav-title />
    </el-header>
    <el-container>
      <el-aside width="200px" v-if="isShowSide">
        <div class="collapse" @click="hideSide">
          <p>功能导航</p>
          <i class="el-icon-caret-left"></i>
        </div>
        <nav-men />
      </el-aside>
      <el-container>
        <el-header>
          <nav-breadcrumb style="width: 100%;" @showSide="showSide" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import NavMen from "./components/NavMen.vue";
import NavTitle from "./components/NavTitle";
import NavBreadcrumb from "./components/NavBreadcrumb";
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    NavMen,
    NavTitle,
    NavBreadcrumb
  },
  computed: {
    ...mapState({
      loading: state => state.load.LOADING
    })
  },
  data() {
    return {
      isShowDefined: true,
      isShowSide: true
    };
  },
  mounted() {
    this.$router.afterEach(to => {
      this.isShowDefined = to.name == "Home";
    });
    this.isShowDefined = this.$route.name == "Home";
  },
  methods: {
    hideSide() {
      this.isShowSide = false;
    },
    showSide() {
      this.isShowSide = true;
    }
  }
};
</script>

<style scoped>
.collapse {
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
i {
  color: #409eff;
}
</style>
