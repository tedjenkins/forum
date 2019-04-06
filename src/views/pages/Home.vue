<template>
  <div id="home">
    <section id="user-stats">
      <div id="user-stats-box" v-if="loggedIn">
        <h3>User dashboard</h3>
      </div>
      <div id="user-not-logged-in" v-else-if="!loggedIn">
        <h3>Anonymous user</h3>
        <div id="user-not-logged-in-notice">Please <router-link to="/login">log in</router-link> or <router-link to="/register">sign up</router-link> to view your dashboard.</div>
        <div class="user-dashboard" id="user-not-logged-in-dashboard">
          <h4>Dashboard</h4>
          <div class="dashboard-row">Post count: <span id="dashboard-post-count">0</span></div>
          <div class="dashboard-row">Last posted in: <a id="dashboard-last-posted-in" href="#">Hello world...</a></div>
          <div class="dashboard-row">Awards given: <span id="dashboard-awards-given">0</span></div>
          <div class="dashboard-row">Awards received: <span id="dashboard-awards-received">0</span></div>
        </div>
      </div>
    </section>
    <section id="unknown">
      here is where TBDs are displayed (genre list?)
    </section>
    <section id="posts-navigation">
      here is where post navigation is displayed (latest, search)
    </section>
    <section id="display-posts">
      here is where posts are displayed <u @click="toggleLoggedIn">(Toggle loggedIn variable)</u>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { formEls } from '@/types';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

@Component({
  components: {
    LoginRegisterForm
  },
})

export default class Home extends Vue {
  loggedIn: boolean = false;

  toggleLoggedIn() {
    this.loggedIn = !this.loggedIn;
  }
}
</script>

<style lang="scss" scoped>
#home {
  display: grid;
  grid-template-areas:
    "stats"
    "topbar"
    "view"
    "other";
  height: 100%;

  #user-stats {
    grid-area: stats;

    & > * {
      display: grid;
      height: 100%;
      text-align: center;
    }

    .user-dashboard {
      padding: 10px 0px;

      & > * {
        padding: 4px;
      }

      h4 {
        background-color: lightblue;
        font-size: 15px;
      }

      .dashboard-row {
        font-size: 14px;
      }

      .dashboard-row:nth-of-type(2n) {
        background-color: lightgrey;
      }
    }

    #user-not-logged-in {
      grid-template-rows: auto auto 0.8fr;
    }
  }

  #unknown {
    background-color: pink;
    grid-area: other;
  }

  #posts-navigation {
    background-color: #afafaf;
    grid-area: topbar;
  }

  #display-posts {
    background-color: lightgreen;
    grid-area: view;
  }
}

@media all and (min-width: 1200px) {
  #home {
    grid-template-areas:
      "stats topbar"
      "stats view"
      "other view";
    grid-template-columns: 0.3fr 0.7fr;
    grid-template-rows: 0.2fr 0.8fr 1fr;

    #user-stats {
      & > * {
        .user-dashboard {
          h4 {
            font-size: 20px;
          }

          .dashboard-row {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
