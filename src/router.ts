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
      path: '/board/:boardName',
      name: 'board',
      component: () =>
        import(/* webpackChunkName: "board" */ './views/pages/dynamic/Board.vue')
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "user" */ './views/pages/dynamic/User.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () =>
        import(/* webpackChunkName: "admin" */ './views/pages/Admin.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () =>
        import(/* webpackChunkName: "post" */ './views/pages/Post.vue')
    }
  ]
});
