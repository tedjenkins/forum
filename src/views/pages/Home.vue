<template>
  <div id="home">
    <section id="login-register" v-if="!loggedIn">
      <ul id="login-register-select" @click="handleSelect">
        <li class="li-selected" id="login-select">Login</li>
        <li id="register-select">Sign up</li>
      </ul>
      <LoginRegisterForm formId="login-form" :elements="loginElements" v-if="showLogin"/>
      <LoginRegisterForm formId="register-form" :elements="registerElements" v-if="!showLogin"/>
    </section>
    <section id="unknown">
      here is where TBDs are displayed (genre list?)
    </section>
    <section id="posts-navigation">
      here is where post navigation is displayed (latest, search)
    </section>
    <section id="display-posts">
      here is where posts are displayed
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

type formEls = Array<{ id?: string, html: string }>;

@Component({
  components: {
    LoginRegisterForm
  },
})

export default class Home extends Vue {
  loginElements: formEls = [
    {
      html: `<label for="login-email">Email address</label> <input type="text" id="login-email"/>`
    },
    {
      html: `<label for="login-password">Password</label> <input type="password" id="login-password"/>`
    },
    {
      id: 'form-extra',
      html: `<button type="submit">Submit</button> <div id="form-remember-me"> <input type="checkbox" id="form-remember"/> <label for="form-remember">Remember me</label></div> <div id="form-forgot-password">(<a href="#">forgot password?</a>)</div>`
    }
  ];

  registerElements: formEls = [
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

  loggedIn: boolean = false;
  showLogin: boolean = true;

  /**
   * Handle select of 'login' and 'register' in their part of the page.
   * @param {MouseEvent} e -- mouse click event.
   */
  handleSelect(e: MouseEvent) {
    const targ = e.target as HTMLElement;

    if ((targ.nodeName !== 'LI') || targ.classList.contains('li-selected')) {
      return;
    }

    Array.from(targ.parentElement!.children).forEach(el => {
      el.classList.remove('li-selected');
    });

    targ.classList.add('li-selected');

    this.showLogin = (targ.textContent!.toLowerCase().includes('login')) ? true : false;
  }}
</script>

<style lang="scss" scoped>
#home {
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    "stats topbar topbar"
    "stats view view"
    "stats view view"
    "other view view"
    "other view view"
    "other view view";

  #login-register {
    grid-area: stats;
    margin: 0px auto;
    width: 640px;

    .li-selected {
      background-color: white;
    }

    #login-register-select {
      border: 1px solid #ccc;
      display: inline-block;
      padding-left: 0px;
      width: auto;

      & > * {
        @include no-select;
        cursor: pointer;
        display: inline-block;
        padding: 8px;

        &:hover {
          background-color: white;
        }
      }
    }
  }

  #unknown {
    grid-area: other;
  }

  #posts-navigation {
    background-color: #afafaf;
    grid-area: topbar;
  }

  #display-posts {
    grid-area: view;
  }
}
</style>
