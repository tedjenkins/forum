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
  background-color: $light-site-main-bgcolor;
  color: $light-site-main-fontcolor;
  grid-row: 2;
}

@media all and (min-width: 1200px) {
  main {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px auto;
    width: 100vw;
  }
}
</style>
