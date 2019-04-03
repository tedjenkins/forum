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
  font-family: Arial, Helvetica, sans-serif;
  grid-row: 2;
}
</style>
