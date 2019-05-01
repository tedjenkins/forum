import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { props } from '@/utils';
import Unicon from 'vue-unicons';
import { uniHome, uniDiaryAlt } from 'vue-unicons/src/icons';
import 'reflect-metadata';

Unicon.add([uniHome, uniDiaryAlt]);
Vue.use(Unicon);

Vue.config.productionTip = false;
Vue.prototype.$siteName = props.siteName;
Vue.prototype.$siteHost =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3010';

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
