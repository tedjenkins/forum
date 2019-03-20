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
    background-color: $light-site-main-bgcolor;
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    width: 100vw;
  }

  header {
    @include hdrftr;
    font-size: 14px;
    grid-row: 1;

    #site-title {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0.4px;
    }
  }

  main {
    color: $light-site-main-fontcolor;
    grid-row: 2;
    padding: $site-padding;
    margin: 0px auto;
    width: $site-max-width;

    & > * {
      display: grid;
    }
  }

  footer {
    @include hdrftr;
    background-color: $light-site-hdrftr-bgcolor;
    grid-row: 3;
  }

  .site-form {
    margin: 0px auto;
    width: 600px;

    .form-section {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 15px 0px;

      label {
        flex: 0 1 45%;
      }

      input {
        flex: 0 1 55%;
      }

      button {
        flex: 0 1 20%;
      }
    }
  }
</style>
