import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Toasted from "vue-toasted";
import "element-ui/lib/theme-chalk/index.css";
import requst from "./request";

Vue.prototype.request = requst;

const Options = {
  position: "bottom-center",
  duration: 3000,
  theme: "bubble",
  singleton: true
};
Vue.use(Toasted, Options);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
