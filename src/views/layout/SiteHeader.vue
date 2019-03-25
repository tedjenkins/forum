<template>
  <header>
    <a id="site-title" href="#" @click="handleEmit">{{ this.$siteName }}</a>
    <nav id="site-navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/latest">Latest</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/post">Post</router-link>
      <router-link to="/search">Search</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import SiteSearchBar from '@/components/SiteSearchBar.vue';

@Component({
  components: {
    SiteSearchBar
  }
})

export default class SiteHeader extends Vue {
  /**
   * Emit to App.vue from click of site-title, to trigger event which reloads Main component by changing its key.
   * @param {MouseEvent} e -- mouse click event.
   */
  @Emit('emitReloadMain')
  handleEmit(e: MouseEvent) {
    e.preventDefault();
  }
}
</script>

<style lang="scss" scoped>
header {
  @include hdrftr;
  border-bottom: $site-border;
  flex-direction: column;
  grid-row: 1;
  padding-bottom: 0px;

  a {
    border: 1px solid transparent;
    border-bottom: 0px;
    color: inherit;
    padding: 4px 12px;
    text-decoration: none;
    transition-duration: 120ms;
    transition-property: background-color;
  }

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
    width: 100%;

    & > * {
      text-align: center;
      width: 20%;
    }

    .router-link-exact-active {
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid #333;
      border-bottom: 0px;

      &:first-of-type {
        border-left: 0px;
      }

      &:last-of-type {
        border-right: 0px;
      }
    }
  }
}

@media all and (min-width: 1200px) {
  header {
    & > * {
      font-size: 15px;
    }

    #site-title {
      font-size: 22px;
    }
  }
}
</style>
