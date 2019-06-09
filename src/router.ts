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
        import(/* webpackChunkName: "board" */ './views/pages/_dynamic/Board.vue')
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "user" */ './views/pages/_dynamic/User.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      children: [
        {
          path: '/add-board',
          component: () =>
            import(/* webpackChunkName: "add-board" */ './views/pages/admin/BoardAdd.vue')
        },
        {
          path: '/remove-board',
          component: () =>
            import(/* webpackChunkName: "remove-board" */ './views/pages/admin/BoardRemove.vue')
        },
        {
          path: '/modify-board',
          component: () =>
            import(/* webpackChunkName: "modify-board" */ './views/pages/admin/BoardModify.vue')
        },
        {
          path: '/ban-user',
          component: () =>
            import(/* webpackChunkName: "ban-user" */ './views/pages/admin/UserBan.vue')
        },
        {
          path: '/view-all-users',
          component: () =>
            import(/* webpackChunkName: "view-all-users" */ './views/pages/admin/UserViewAll.vue')
        },
        {
          path: '/modify-blacklisted-terms',
          component: () =>
            import(/* webpackChunkName: "modify-blacklisted-terms" */ './views/pages/admin/MiscModifyBlacklist.vue')
        },
        {
          path: '/modify-site-settings',
          component: () =>
            import(/* webpackChunkName: "modify-site-settings" */ './views/pages/admin/MiscModifySettings.vue')
        },
        {
          path: '/sandbox',
          component: () =>
            import(/* webpackChunkName: "sandbox" */ './views/pages/admin/MiscSandbox.vue')
        }
      ],
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
