import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$siteName = 'Site Title';
Vue.prototype.$siteHost = (process.env.NODE_ENV === 'production') ? '' : 'http://localhost:3010';

export default new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
