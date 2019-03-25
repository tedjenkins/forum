<template>
  <main>
    <router-view/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class SiteMain extends Vue {}
</script>

<style lang="scss" scoped>
main {
  color: $light-site-main-fontcolor;
  grid-row: 2;

  & > * {
    display: grid;
  }
}

@media all and (min-width: 1200px) {
  main {
    padding: $site-padding;
    margin: 0px auto;
    width: $site-max-width;
  }
}
</style>
