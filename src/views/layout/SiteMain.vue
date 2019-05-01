<template>
  <main>
    <aside id="side-interface" @click="handleSidebarExpandCollapse">
      <div id="side-interface-components" :class="{'side-interface-hidden': sidebarIsHidden()}">
        <SiteDashboard/>
        <SiteBoardList :boards="boardList"/>
      </div>
      <div id="side-interface-bar">{{ showOrHide }} info</div>
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
      title: 'Board 1',
      path: '/board1'
    },
    {
      title: 'Board 2',
      path: '/board2'
    },
    {
      title: 'Board 3',
      path: '/board3'
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

  // Key of localStorage entry
  lsEntry = `${Vue.prototype.$siteName
    .toLowerCase()
    .split(' ')
    .join('-')}-sidebar-is-hidden`;

  // Either the string 'show' or the string 'hide'
  showOrHide: string = 'hide';

  /**
   * Set state in localStorage collapsing or expanding the sidebar (mobile only).
   * @param {MouseEvent} e -- mouse click event.
   */
  handleSidebarExpandCollapse(e: MouseEvent) {
    const targ = e.target as HTMLElement;

    if (targ.id !== 'side-interface-bar') {
      return;
    }

    document
      .getElementById('side-interface-components')!
      .classList.toggle('side-interface-hidden');

    this.showOrHide = this.showOrHide === 'show' ? 'hide' : 'show';

    localStorage.setItem(this.lsEntry, `${!this.sidebarIsHidden()}`);
  }

  /**
   * Get state from localStorage determining if sidebar is collapsed or expanded.
   * @returns {boolean} true if hidden (collapsed), false if not.
   */
  sidebarIsHidden() {
    if (localStorage.getItem(this.lsEntry) === null) {
      localStorage.setItem(this.lsEntry, 'false');
    }

    if (localStorage.getItem(this.lsEntry) === 'true') {
      return true;
    } else {
      return false;
    }
  }
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

    .side-interface-hidden {
      display: none;
    }

    #side-interface-bar {
      align-items: center;
      background-color: green;
      border: 1px solid black;
      border-left: 0px;
      border-right: 0px;
      color: white;
      cursor: pointer;
      display: flex;
      font-size: 12px;
      height: 20px;
      justify-content: center;
      text-transform: uppercase;
    }
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
        height: 100%;
        width: 100%;

        & > * {
          height: 50%;
        }
      }

      #side-interface-bar {
        display: none;
      }
    }
  }
}
</style>
