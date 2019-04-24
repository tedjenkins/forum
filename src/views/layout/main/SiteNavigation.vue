<template>
  <section id="posts-navigation">
    <LiveSearchBar inputId="posts-navigation-search" placeholder="Search site..."/>
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
#posts-navigation {
  background-color: $light-site-tertiary-bgcolor;
  color: $light-site-tertiary-fontcolor;
  grid-area: topbar;
}
</style>
