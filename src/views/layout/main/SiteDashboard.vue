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
      <a href="#" class="site-btn" id="log-in">Log in</a>
      <a href="#" class="site-btn" id="sign-up">Sign up</a>
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
      background-color: lightgrey;
    }
  }

  #user-not-logged-in {
    height: 100%;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}

@media all and (min-width: 1200px) {
  #site-dashboard {
    grid-area: stats;

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
