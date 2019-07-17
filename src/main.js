import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

import "./assets/custom.scss";

new Vue({
  render: h => h(App)
}).$mount("#app");
