<template>
  <section id="site-navigation">
    <div id="site-navigation-links" @click="handleLinks">
      <span id="site-navigation-links-dashboard">Dashboard</span>
      <span id="site-navigation-links-board-list">Board list</span>
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
export default class SiteNavigation extends Vue {
  handleLinks(e: MouseEvent) {
    const targ = e.target as HTMLElement;

    if (targ.nodeName !== 'SPAN') {
      return;
    }

    console.log(targ.textContent);
  }
}
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
    & > * {
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
