<template>
  <section id="site-dashboard">
    <div id="user-dashboard" v-if="this.$store.state.loggedIn">
      <h4 class="site-main-header">Dashboard</h4>
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
    <div id="user-not-logged-in" v-else-if="!this.$store.state.loggedIn">
      <h4 class="site-main-header">Dashboard (guest)</h4>
      <div id="log-in-sign-up-box">
        You are not currently logged in. Please use the form below to log in or
        <router-link to="/signup">sign up</router-link>.
        <form id="login-form" @submit="handleLoginForm">
          <div class="form-section">
            <label for="login-form-username">Username</label>
            <input type="text" id="login-form-username" required>
          </div>
          <div class="form-section">
            <label for="login-form-password">Password</label>
            <input type="password" id="login-form-password" required>
          </div>
          <div class="form-section">
            <button type="submit" id="login-form-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SiteDashboard extends Vue {
  /**
   * Handle login form on submit.
   * @param {Event} e -- form submit event.
   */
  handleLoginForm(e: Event) {
    e.preventDefault();
    const targ = e.target as HTMLFormElement;
    const vals: string[] = [];

    targ.querySelectorAll('input').forEach(child => vals.push(child.value));

    fetch(`${Vue.prototype.$siteHost}/login`, {
      method: 'POST',
      body: JSON.stringify(vals),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(err => console.log(err));
  }
}
</script>

<style lang="scss" scoped>
#site-dashboard {
  background-color: $light-site-secondary-bgcolor;

  & > * {
    text-align: center;
  }

  #user-dashboard {
    & > * {
      padding: 4px;
    }

    .dashboard-row {
      font-size: 14px;
    }

    .dashboard-row:nth-of-type(2n) {
      background-color: lightgreen;
    }
  }
}

@media all and (min-width: 1200px) {
  #site-dashboard {
    & > * {
      #user-dashboard {
        .dashboard-row {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
