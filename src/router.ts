import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/latest',
      name: 'latest',
      component: () => import(/* webpackChunkName: "latest" */ './views/pages/Latest.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/pages/Settings.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ './views/pages/Post.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/pages/Search.vue')
    }
  ],
});
