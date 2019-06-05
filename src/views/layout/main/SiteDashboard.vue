<template>
  <section id="site-dashboard">
    <div id="user-dashboard-logged-in" v-if="this.$store.state.loggedIn">
      <h3 class="site-main-header">Dashboard</h3>
      <div class="side-interface-box" id="dashboard-wrapper">
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
    <div id="user-dashboard-not-logged-in" v-else-if="!this.$store.state.loggedIn">
      <h3 class="site-main-header">Please log in</h3>
      <div class="side-interface-box" id="log-in-sign-up-box">
        You are not currently logged in. Use the form below to log in or
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
          <div class="form-section-btn">
            <button type="submit" id="login-form-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { props, utils } from '@/utils';

@Component({})
export default class SiteDashboard extends Vue {
  /**
   * Handle login form on submit.
   * @param {Event} e -- form submit event.
   */
  handleLoginForm(e: Event) {
    e.preventDefault();
    const targ = e.target as HTMLFormElement;
    const vals: { [key: string]: string } = {};

    targ.querySelectorAll('input').forEach(child => {
      if (child.id.includes('username')) {
        vals.username = child.value;
      } else if (child.id.includes('password')) {
        vals.password = child.value;
      }
    });

    fetch(`${props.siteHost}/login`, {
      method: 'POST',
      body: JSON.stringify(vals),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
</script>

<style lang="scss" scoped>
#site-dashboard {
  & > * {
    text-align: center;
  }

  .side-interface-box {
    padding: 10px 0px;
  }

  #user-dashboard-logged-in {
    #dashboard-wrapper {
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

  #user-dashboard-not-logged-in {
    #log-in-sign-up-box {
      font-size: 14px;

      #login-form {
        .form-section {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 5px;

          label {
            font-weight: bold;
            text-align: center;
            width: 100%;
          }

          input {
            width: 100%;
          }
        }
      }
    }
  }
}

@media all and (min-width: 1200px) {
  #site-dashboard {
    & > * {
      #user-dashboard-logged-in {
        #dashboard-wrapper {
          .dashboard-row {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
