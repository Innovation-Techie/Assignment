import Vue from 'vue';
import App from './App.vue';
import Multiselect from 'vue-multiselect';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
Vue.component('multiselect', Multiselect);
