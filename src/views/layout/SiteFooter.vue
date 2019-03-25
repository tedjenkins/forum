<template>
  <footer>
    <div id="site-credits">{{ this.$siteName }} © <a href="https://usefulsoftware.xyz">UsefulSoftware.xyz</a> 2019</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class SiteFooter extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  @include hdrftr;
  border-top: $site-border;
  grid-row: 3;
  padding: 10px;
  text-align: right;

  #site-credits {
    display: inline-block;
  }
}
</style>
