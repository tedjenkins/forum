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
        <HeaderSiteSearch/>
        <div id="site-post">Post</div>
      </div>
    </header>
    <main :key="mainKey">
      <router-view/>
    </main>
    <footer>
      <div id="site-credits">Copyright (c) UsefulSoftware.xyz 2019</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderSiteSearch from '@/components/HeaderSiteSearch.vue';

@Component({
  components: {
    HeaderSiteSearch,
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
    font-family: Helvetica, Arial, sans-serif;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    width: 100vw;
  }

  header {
    @include hdrftr;
    grid-row: 1;

    #site-title {
      font-weight: bold;
    }
  }

  main {
    background-color: $dark-site-main-bgcolor;
    color: $dark-site-main-fontcolor;
    grid-row: 2;
  }

  footer {
    @include hdrftr;
    background-color: $dark-site-hdrftr-bgcolor;
    grid-row: 3;
  }
</style>
