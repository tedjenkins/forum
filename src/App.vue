<template>
  <div id="app">
    <header>
      <div id="header-container">
        <a id="site-title" href="" @click="reloadMain">{{ this.$siteName }}</a>
        <nav id="site-navigation">
          <router-link to="/">Home</router-link>
          <!-- v-if loggedIn -->
          <router-link to="/latest">Latest</router-link>
          <router-link to="/settings">Settings</router-link>
          <!-- end v-if -->
          <!-- v-if !loggedIn -->
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
          <!-- end v-if -->
          <!-- v-if admin -->
          <router-link to="/admin">Admin</router-link>
          <!-- end v-if -->
        </nav>
        <SiteSearchBox/>
        <div id="site-post">Post</div>
      </div>
    </header>
    <main :key="mainKey">
      <router-view/>
    </main>
    <footer>
      <div id="site-credits">{{ this.$siteName }} copyright (c) <a href="https://usefulsoftware.xyz">UsefulSoftware.xyz</a> 2019</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteSearchBox from '@/components/SiteSearchBox.vue';

@Component({
  components: {
    SiteSearchBox,
  }
})

export default class App extends Vue {
  mainKey = 0;

  reloadMain(e: Event) {
    e.preventDefault();
    this.mainKey++;
  }
}
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow-x: hidden;
  width: 100vw;
}

header {
  @include hdrftr;
  grid-row: 1;

  #header-container {
    flex-flow: column;

    & > * {
      font-size: 14px;
      margin-top: 4px;
    }

    #site-title {
      font-size: 20px;
      font-weight: bold;
    }

    #site-navigation {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
  }
}

main {
  color: $light-site-main-fontcolor;
  grid-row: 2;

  & > * {
    display: grid;
  }
}

footer {
  @include hdrftr;
  background-color: $light-site-hdrftr-bgcolor;
  grid-row: 3;
}

@media all and (min-width: 600px) {
  header {
    #header-container {
      flex-flow: row;

      & > * {
        margin: 0px 5px;
      }
    }
  }
}

@media all and (min-width: 1200px) {
  header {
    #header-container {
      & > * {
        font-size: 15px;
      }

      #site-title {
        font-size: 22px;
      }
    }
  }

  main {
    padding: $site-padding;
    margin: 0px auto;
    width: $site-max-width;
  }
}
</style>
