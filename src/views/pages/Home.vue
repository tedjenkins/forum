<template>
  <div id="home">
    <section id="login-register" v-if="!loggedIn">
      <ul id="login-register-select" @click="handleSelect">
        <li class="li-selected" id="login-select">Login</li>
        <li id="register-select">Sign up</li>
      </ul>
      <form class="site-form" id="login-form" v-if="showLogin" @submit="handleForm">
        <div class="form-section">
          <label for="login-email">Email address</label>
          <input type="text" id="login-email" minlength="6" maxlength="24"/>
        </div>
        <div class="form-section">
          <label for="login-password">Password</label>
          <input type="password" id="login-password"/>
        </div>
        <div class="form-section" id="login-extra">
          <button type="submit">Submit</button>
          <div id="form-remember-me">
            <input type="checkbox" id="form-remember"/> <label for="form-remember">Remember me</label>
          </div>
          <div id="form-forgot-password">
            (<a href="#">forgot password?</a>)
          </div>
        </div>
      </form>
      <form class="site-form" id="register-form" v-if="!showLogin" @submit="handleForm">
        <div class="form-section">
          Signing up with {{ this.$siteName }} is quick and easy.
        </div>
        <div class="form-section">
          <label for="register-username">Username</label>
          <input type="text" id="register-username" minlength="6" maxlength="24"/>
        </div>
        <div class="form-section">
          <label for="register-password">Password</label>
          <input type="password" id="register-password"/>
        </div>
        <div class="form-section">
          <label for="register-password-repeat">Repeat password</label>
          <input type="password" id="register-password-repeat"/>
        </div>
        <div class="form-section">
          <label for="register-email">Email address</label>
          <input type="text" id="register-email" minlength="6" maxlength="24"/>
        </div>
        <div class="form-section" id="register-info">
          By signing up you agree to our <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and our <a href="#">usage of cookies</a>. You must also be aged 13 or over to register.
        </div>
        <div class="form-section">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
    <section id="display-posts">
      here is where posts are displayed
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

@Component({
  components: {
    LoginRegisterForm
  },
})

export default class Home extends Vue {
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
  }

  /**
   * Handle login / register form.
   * @param {Event} e -- submit event.
   */
  handleForm(e: Event) {
    e.preventDefault();

    const targ = e.target as HTMLFormElement;
    const vals: string[] = [];
    targ.querySelectorAll('input').forEach(el => {
      if (el.type === 'password') {
        const encrypted = btoa(el.value);
        vals.push(encrypted);
        return true;
      }
      if (el.value.length < 6) {
        //
      }
      vals.push(el.value);
    });

    fetch(`${Vue.prototype.$siteHost}/register`, {
      method: 'POST',
      body: JSON.stringify(vals),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }
}
</script>

<style lang="scss" scoped>
.li-selected {
  background-color: white;
}

#login-register {
  margin: 0px auto;
  width: 640px;

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

  .site-form {
    background-color: #fafafa;
    border: 1px solid #ccc;
    padding: 10px;

    .form-section {
      padding: 4px;

      & > * {
        display: block;
        font-size: 18px;
      }

      label {
        font-weight: bold;
        padding: 10px;
        text-align: center;
      }

      input {
        margin: 0px auto;
      }

      button {
        margin: 10px auto;
      }

      a {
        display: inline;
        
        &:active {
          outline-color: transparent;
        }
      }

      div {
        text-align: center;
      }
    }

    #register-info {
      text-align: center;
    }
  }
}
</style>
