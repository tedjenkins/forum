<template>
  <div id="home">
    <section id="user-stats">
      <div id="user-stats-box" v-if="loggedIn">
        <div id="user-dashboard">
          <h4>Dashboard</h4>
          <div class="dashboard-row">Post count: <span id="dashboard-post-count">0</span></div>
          <div class="dashboard-row">Last posted in: <a id="dashboard-last-posted-in" href="#">Hello world...</a></div>
          <div class="dashboard-row">Awards given: <span id="dashboard-awards-given">0</span></div>
          <div class="dashboard-row">Awards received: <span id="dashboard-awards-received">0</span></div>
        </div>
      </div>
      <div id="user-not-logged-in" v-else-if="!loggedIn">
        <h3>Anonymous user</h3>
        <div id="user-not-logged-in-notice">Please <router-link to="/login">log in</router-link> or <router-link to="/register">sign up</router-link> to view your dashboard.</div>
      </div>
    </section>
    <section id="unknown">
      here is where TBDs are displayed (genre list?)
    </section>
    <section id="posts-navigation">
      <div id="posts-navigation-links">
        <div id="posts-navigation-latest">Latest</div>
        <div id="posts-navigation-search">Search</div>
      </div>
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
  loggedIn: boolean = true;

  toggleLoggedIn() {
    this.loggedIn = !this.loggedIn;
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
      "stats topbar"
      "stats view"
      "other view";
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
