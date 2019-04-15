<template>
  <div id="home">
    <section id="user-stats">
      <div id="user-stats-box" v-if="loggedIn">
        <div id="user-dashboard">
          <h4>Dashboard</h4>
          <div class="dashboard-row">
            Post count:
            <span id="dashboard-post-count">0</span>
          </div>
          <div class="dashboard-row">
            Last posted in:
            <a id="dashboard-last-posted-in" href="#">Hello world...</a>
          </div>
          <div class="dashboard-row">
            Awards given:
            <span id="dashboard-awards-given">0</span>
          </div>
          <div class="dashboard-row">
            Awards received:
            <span id="dashboard-awards-received">0</span>
          </div>
        </div>
      </div>
      <div id="user-not-logged-in" v-else-if="!loggedIn">
        <h3>Anonymous user</h3>
        <div id="user-not-logged-in-notice" @click="handleLoginRegisterClick">
          Please
          <a href="#">log in</a> or
          <a href="#">sign up</a> to view your dashboard.
        </div>
        <div id="hidden-box" style="left: 0px; opacity: 0;">
          <keep-alive>
            <LoginRegisterForm
              formId="login-form"
              :elements="loginFormEls"
              v-if="userClickedLogin"
            />
          </keep-alive>
          <keep-alive>
            <LoginRegisterForm
              formId="register-form"
              :elements="registerFormEls"
              v-if="!userClickedLogin"
            />
          </keep-alive>
        </div>
      </div>
    </section>
    <section id="unknown">here is where TBDs are displayed (genre list?)</section>
    <section id="posts-navigation">
      <div id="posts-navigation-links">
        <div id="posts-navigation-latest">Latest</div>
        <div id="posts-navigation-search">Search</div>
      </div>
    </section>
    <section id="display-posts">
      here is where threads are displayed
      <u @click="toggleLoggedIn">(Toggle loggedIn variable)</u>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import { formEls } from '@/types';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

@Component({
  components: {
    LoginRegisterForm
  }
})
export default class Home extends Vue {
  loggedIn: boolean = false;
  userClickedLogin: boolean = false;

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

  toggleLoggedIn() {
    this.loggedIn = !this.loggedIn;
  }

  handleLoginRegisterClick(e: MouseEvent) {
    const targ = e.target as HTMLElement;
    const popup = document.getElementById('hidden-box')!;

    if (targ.nodeName !== 'A') {
      return;
    }

    Vue.prototype.$addModalAttr(targ);

    if (targ.textContent!.toLowerCase().includes('log')) {
      this.userClickedLogin = true;
    } else {
      this.userClickedLogin = false;
    }

    popup.style.left = `${e.pageX}px`;
    document.querySelectorAll('[data-is-modal="true"]').forEach(el => (el as HTMLElement).style.opacity = '1');

    Vue.prototype.$modalIsDisplaying = true;
  }
}
</script>

<style lang="scss" scoped>
@mixin h4-styling {
  background-color: lightblue;
  font-size: 15px;
  text-align: center;

  @media all and (min-width: 1200px) {
    font-size: 20px;
  }
}

#home {
  height: 100%;

  #user-stats {
    & > * {
      text-align: center;
    }

    #user-dashboard {
      & > * {
        padding: 4px;
      }

      h4 {
        @include h4-styling;
      }

      .dashboard-row {
        font-size: 14px;
      }

      .dashboard-row:nth-of-type(2n) {
        background-color: lightgrey;
      }
    }

    #user-not-logged-in {
      #hidden-box {
        border: 1px solid black;
        padding: 10px;
        position: absolute;
        width: 320px;
      }
    }
  }

  #unknown {
    background-color: pink;
  }

  #posts-navigation {
    background-color: darkslategrey;
    color: white;

    #posts-navigation-links {
      display: flex;
      height: 100%;
      padding: 4px;

      & > * {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex: 0 1 50%;
        font-size: 13px;
        justify-content: center;
        user-select: none;
      }
    }
  }

  #display-posts {
    background-color: lightgreen;
  }
}

@media all and (min-width: 1200px) {
  #home {
    display: grid;
    grid-template-areas:
      'stats topbar'
      'stats view'
      'other view';
    grid-template-columns: 0.3fr 0.7fr;
    grid-template-rows: 31px 0.9fr 1fr;

    #user-stats {
      border-right: 1px solid black;
      grid-area: stats;

      & > * {
        #user-dashboard {
          .dashboard-row {
            font-size: 16px;
          }
        }
      }
    }

    #unknown {
      border-right: 1px solid black;
      grid-area: other;
    }

    #posts-navigation {
      grid-area: topbar;

      #posts-navigation-links {
        & > * {
          font-size: 15px;
        }
      }
    }

    #display-posts {
      grid-area: view;
    }
  }
}
</style>
