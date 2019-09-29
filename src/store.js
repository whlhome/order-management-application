import Vue from "vue";
import Vuex from "vuex";
import load from "@/store/module/load";
import router from "@/store/module/router";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    load: load,
    router: router
  }
});
