import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import Unicon from 'vue-unicons';
import { uniHome, uniDiaryAlt } from 'vue-unicons/src/icons';
import 'reflect-metadata';

Unicon.add([uniHome, uniDiaryAlt]);
Vue.use(Unicon);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
