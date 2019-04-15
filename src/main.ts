import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'reflect-metadata';

Vue.config.productionTip = false;
Vue.prototype.$siteName = 'Site Title';
Vue.prototype.$siteHost = (process.env.NODE_ENV === 'production') ? '' : 'http://localhost:3010';

// temp
Vue.prototype.$modalIsDisplaying = false;
Vue.prototype.$addModalAttr = (el: HTMLElement) => {
  el.dataset.isModal = 'true';
  for (const child of Array.from(el.children)) {
    Vue.prototype.$addModalAttr(child as HTMLElement);
  }
};

export default new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
