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
      path: '/profile',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ './views/pages/Profile.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () =>
        import(/* webpackChunkName: "signup" */ './views/pages/Signup.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () =>
        import(/* webpackChunkName: "settings" */ './views/pages/Settings.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () =>
        import(/* webpackChunkName: "post" */ './views/pages/Post.vue')
    }
  ]
});
