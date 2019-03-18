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
        <div id="site-post">Post</div>
      </div>
    </header>
    <main :key="mainKey">
      <router-view/>
    </main>
    <footer>
      <div id="site-credits">Copyright (c) 2019</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
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
    font-family: Helvetica, Arial, sans-serif;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    width: 100vw;
  }

  header {
    background-color: $site-bg-color;
    grid-row: 1;
    padding: $site-hdrftr-padding;

    #header-container {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      margin: 0px auto;
      max-width: $site-max-width;
    }
  }

  main {
    grid-row: 2;
  }

  footer {
    background-color: $site-bg-color;
    grid-row: 3;
    padding: $site-hdrftr-padding;
  }
</style>
