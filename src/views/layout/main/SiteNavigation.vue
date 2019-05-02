<template>
  <section id="site-navigation">
    <div id="site-navigation-links" @click="handleLinks">
      <span id="site-navigation-links-home" title="Home">
        <router-link to="/">
          <unicon name="home" fill="#ccc"/>
        </router-link>
      </span>
      <span id="site-navigation-links-profile" title="Profile">
        <router-link to="/profile">
          <unicon name="diary-alt" fill="#ccc"/>
        </router-link>
      </span>
    </div>
    <LiveSearchBar inputId="site-navigation-search" placeholder="Search site..."/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LiveSearchBar from '@/components/LiveSearchBar.vue';

@Component({
  components: {
    LiveSearchBar
  }
})
export default class SiteNavigation extends Vue {}
</script>

<style lang="scss" scoped>
#site-navigation {
  align-items: center;
  background-color: $light-site-tertiary-bgcolor;
  color: $light-site-tertiary-fontcolor;
  display: flex;
  grid-area: topbar;
  justify-content: flex-start;

  #site-navigation-links {
    align-items: center;
    display: flex;
    justify-content: center;

    & > * {
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
