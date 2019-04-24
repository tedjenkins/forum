<template>
  <main>
    <aside id="side-interface">
      <div id="side-interface-components">
        <SiteDashboard/>
        <SiteBoardList :boards="boardList"/>
      </div>
    </aside>
    <SiteNavigation/>
    <section id="display">
      <router-view/>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { formEls } from '@/types';

import SiteDashboard from '@/views/layout/main/SiteDashboard.vue';
import SiteBoardList from '@/views/layout/main/SiteBoardList.vue';
import SiteNavigation from '@/views/layout/main/SiteNavigation.vue';

@Component({
  components: {
    SiteDashboard,
    SiteBoardList,
    SiteNavigation
  }
})
export default class SiteMain extends Vue {
  boardList = [
    {
      title: 'Hello World',
      path: '/hello'
    },
    {
      title: 'Foo',
      path: '/foo'
    },
    {
      title: 'Bar',
      path: '/bar'
    }
  ];

  loginFormEls: formEls = [
    {
      html: `<label for="login-email">Email address</label> <input type="text" id="login-email"/>`
    },
    {
      html: `<label for="login-password">Password</label> <input type="password" id="login-password"/>`
    },
    {
      id: 'login-extra',
      html: `<button type="submit">Submit</button> <div id="form-remember-me"> <input type="checkbox" id="form-remember"/> <label for="form-remember">Remember me</label></div> <div id="form-forgot-password">(<a href="#">forgot password?</a>)</div>`
    }
  ];

  registerFormEls: formEls = [
    {
      html: `Signing up with ${Vue.prototype.$siteName} is quick and easy.`
    },
    {
      html: `<label for="register-username">Username</label> <input type="text" id="register-username" minlength="6" maxlength="24"/>`
    },
    {
      html: `<label for="register-password">Password</label> <input type="password" id="register-password"/>`
    },
    {
      html: `<label for="register-password-repeat">Repeat password</label> <input type="password" id="register-password-repeat"/>`
    },
    {
      html: `<label for="register-email">Email address</label> <input type="text" id="register-email" minlength="6" maxlength="24"/>`
    },
    {
      id: 'register-info',
      html: `By signing up you agree to our <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and our <a href="#">usage of cookies</a>. You must also be aged 13 or over to register.`
    },
    {
      html: `<button type="submit">Submit</button>`
    }
  ];
}
</script>

<style lang="scss" scoped>
main {
  background-color: $light-site-main-bgcolor;
  color: $light-site-main-fontcolor;
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  grid-row: 2;
  grid-template-areas:
    'topbar'
    'aside'
    'view';
  grid-template-rows: auto auto 1fr;
  height: 100%;

  #side-interface {
    grid-area: aside;
  }

  #display {
    grid-area: view;
  }
}

@media all and (min-width: 1200px) {
  main {
    grid-template-areas:
      'aside topbar'
      'aside view';
    grid-template-columns: 0.2fr auto;
    grid-template-rows: auto 1fr;

    #side-interface {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;

      #side-interface-components {
        width: 100%;
      }
    }
  }
}
</style>
