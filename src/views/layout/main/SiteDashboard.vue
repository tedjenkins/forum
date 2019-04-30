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
        <router-link to="/login">Log in</router-link>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SiteDashboard extends Vue {}
</script>

<style lang="scss" scoped>
#site-dashboard {
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

  #user-not-logged-in {
    #log-in-sign-up-box {
      & > * {
        color: inherit;
        display: block;
        padding: 5px;
        text-decoration: none;
      }
    }
  }
}

@media all and (min-width: 1200px) {
  #site-dashboard {
    background-color: $light-site-secondary-bgcolor;

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
